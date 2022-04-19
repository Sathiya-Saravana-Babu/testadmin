import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService } from "@nebular/theme";
import { VehiclesFormComponent } from "./vehicles-form/vehicles-form.component";
import { WebService } from "../../providers/web.service";
import { CommonService } from "../../providers/common.service";
import VehiclesModel from './vehicles-form/vehicles-model';
import {environment} from './../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: "ngx-vehicles",
  templateUrl: "./vehicles.component.html",
  styleUrls: ["./vehicles.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class VehiclesComponent implements OnInit {
  //tableSettings:any;
  tableSource: VehiclesModel[];
  tableSourceTemp: VehiclesModel[];
  base_url: string = environment.base_url;
  loading:boolean;

  companyName:string = '';
  companyDetails:any = {};

  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  tableSettings: any = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>'
    },
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
    },
    actions: {
      columnTitle: "Actions",
      add: true,
      edit: true,
      delete: true,
      position: "right",
    },
    sort: true,
    mode: "external",
    pager: {
      perPage: 15
    },
    columns: {
      starting_point:{
        title: "From",
        type: "string",
       // width: '150px'
      },
      ending_point: {
        title: "To",
        type: "string",
       // width: '150px'
      },
      routes_departure_time: {
        title: "Departure Time",
        type: "string",
        valuePrepareFunction: (data:string)=>{
          return this.AMPMConverter(data);
        }
      },
      routes_arriving_time:{
        title: "Arrival Time",
        type: 'string',
        valuePrepareFunction: (data:string)=>{
          return this.AMPMConverter(data);
        }
      },
      class_name: {
        title: 'Class',
        type: 'string'
      }
    },
  };

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

  ngOnInit(): void {

    this.getPageData(this.activatedRoute.snapshot.paramMap.get('company'));
    this.companyDetails = this.common.getCompanyDetails();
    if(!this.companyDetails.web_id){
      this.router.navigate(['/pages/companies'])
    }
    console.log(this.companyDetails, 'details');
  }

  onCustomAction(event: any) {
    console.log(event);
  }


  selectRow(event: any) {
    let id = event.data.route_id;
    let data = this.tableSourceTemp.filter(x => x.route_id==id)[0]
    let w = this.windowService.open(VehiclesFormComponent, {
      title: `View Route - ${data.vehicles_vehicle_name}`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: data, action: 'view'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      //this.ngOnInit();
    });
  }

  createRow() {
    //let tempCompany = this.tableSource[0];

    let newData:any = {
      vehicles_vehicle_name: this.companyDetails.vehicles_vehicle_name,
      routes_vehicle_id: this.companyDetails.web_id,
      routes_travel_type: 1
    }

    console.log(newData);
    let w = this.windowService.open(VehiclesFormComponent, {
      title: `Add Route`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: newData, action: 'add'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  editRow(event: any) {

    let id = event.data.route_id;
    let data = this.tableSourceTemp.filter(x => x.route_id==id)[0]

    let w = this.windowService.open(VehiclesFormComponent, {
      title: `Edit Route - ${data.vehicles_vehicle_name}`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: data, action: 'edit'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  deleteRow(event: any) {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.loading = true;
      this.web.postData('deleteRoute', event.data).then(res=>{
        this.loading = false;
        if(res.status=='200'){
          this.common.presentToast(res.error, 'Success');
          this.ngOnInit();
        }else{
          this.common.presentToast(res.error, 'Failed');
        }
      },err=>{
        this.loading = false;
        this.common.presentToast('Connection Error')
      })
    }

  }

  getPageData(company:string) {
    this.loading = true;
    this.web.getData('getAllRoutes?company='+company).then(res=>{
      this.loading = false;
      if(res.status=='200'){
        this.mappingTableData(res.data)
        // this.tableSource = res.data;
        console.log(res.data, 'all routes')
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    },err=>{
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error');
    })
  }

  mappingTableData(val:any){
    this.tableSource = val;
    let compName:VehiclesModel = val[0];
    this.companyName = 'Manage Companies - '+ compName.vehicles_vehicle_name + ' '+ '<img class="companylogo pl-2" src="'+this.base_url+'uploads/companies/'+compName.vehicles_vehicle_logo+'" alt="EasyTravel" />'
    this.tableSourceTemp = JSON.parse(JSON.stringify(val));
    this.tableSource.map((x:VehiclesModel)=>{
      return x;
    })
  }



}
