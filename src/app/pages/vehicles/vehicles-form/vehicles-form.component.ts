import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { VehicleFormService } from "./vehicles-form.service";
import VehiclesModel from './vehicles-model';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: "ngx-vehicles-form",
  templateUrl: "./vehicles-form.component.html",
  styleUrls: ["./vehicles-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class VehiclesFormComponent implements OnInit {
  dialogData: VehiclesModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  loading:boolean = false;

  vehicleDetails:VehiclesModel = new VehiclesModel();
  placesDetails:any=[];
  classDetails:any = [];
  @ViewChild('autoInputStart') inputStart;
  @ViewChild('autoInputEnd') inputEnd;
  filteredOptions$: Observable<any[]>;
  filteredOptionsEnd$: Observable<any[]>;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private formService: VehicleFormService,
    private common: CommonService,
    private web: WebService
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action;
    this.dialogData.action = context.action;

    this.vehicleDetails.action = context.action;
    if(this.dialogAction == 'add'){
      this.vehicleDetails.routes_vehicle_id = this.dialogData.routes_vehicle_id;
    }
  }

  AMPMConverter(time:any){
    let date = time.split(':');
    var hours = date[0];
    var minutes = date[1];
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0'+hours : hours;
    minutes =  minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

/*****************************  Auto complete places *********************************/

private filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.placesDetails.filter(optionValue => (optionValue.places_placename.toLowerCase().includes(filterValue) && optionValue.places_placename != this.vehicleDetails.starting_point && this.vehicleDetails.ending_point != optionValue.places_placename));
}

getFilteredOptions(value: string): Observable<string[]> {
  return of(value).pipe(
    map(filterString => this.filter(filterString)),
    );
  }

  onRouteChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.inputStart.nativeElement.value);
    this.filteredOptionsEnd$ = this.getFilteredOptions(this.inputEnd.nativeElement.value);
  }

  onSelectionChange($event:any,type:string ) {
    if(type=='start'){
      this.filteredOptions$ = this.getFilteredOptions($event);
    }else{
      this.filteredOptionsEnd$ = this.getFilteredOptions($event);
    }
  }

/*****************************  *********************************/

  closeWindow() {
    this.windowRef.close();
  }

  currencyConverter(amount:any){
    return this.formService.currencyConverter(amount);
  }

  firstLetterCapitalize(data:string){
    let a = data.split('').map((x,i)=>{if(i==0){x = x.toUpperCase();}return x;}).join('')
    return a;
  }

  getPlacesDetails(route:number){
    this.loading = true;
    this.web.getData('getAllPlaces').then(res=>{
      if(this.dialogData.route_id){
        this.getRouteDetails(route);
      }else{
        this.loading = false;
      }
      if(res.status=='200'){
        this.placesDetails = res.data;
        this.classDetails = res.class;
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    }, err=>{
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error');
    });
  }

  getRouteDetails(routes:number){
    this.web.postData('viewRouteDetails', {route: routes || ''}).then(res=>{
      this.loading = false;
      if(res.status=='200'){
        setTimeout(() => {
          this.vehicleDetails = res.data;
          this.vehicleDetails.action = this.dialogAction;
        }, 50);
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    }, err=>{
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error');
    });
  }

  async ngOnInit(): Promise<void> {

   this.getPlacesDetails(this.dialogData.route_id);
    console.log(this.dialogData);


  }

  async submitFormResults(){
    /******************************* value preparation *********************************/
    console.log(this.vehicleDetails);
    if(this.vehicleDetails.starting_point){
      this.vehicleDetails.routes_starting_point = this.placesDetails.filter(x => x.places_placename==this.vehicleDetails.starting_point)[0].web_id;
    }
    if(this.vehicleDetails.ending_point){
      this.vehicleDetails.routes_ending_point = this.placesDetails.filter(x => x.places_placename==this.vehicleDetails.ending_point)[0].web_id;
    }
    let confirm = this.formService.vehiclesFormValidation(this.vehicleDetails);
    console.log(confirm);
    if(confirm){

      // if(this.dialogAction=='add'){

      // }

    /******************************* value preparation *********************************/
      //return;
      this.loading = true;
      this.web.postData('routesDetailsUpdate', this.vehicleDetails).then(res=>{
        this.loading = false;
        if(res.status=='200'){

          this.closeWindow();
          this.common.presentToast(res.error, 'Success')
        }else{
          this.common.presentToast(res.error, 'Error')
        }
      },err=>{
        this.loading = false;
        console.log(err, 'Error');
        this.common.presentToast('Connection Error.');
      })
    }else{
      this.loading = false;
    }

  }



}
