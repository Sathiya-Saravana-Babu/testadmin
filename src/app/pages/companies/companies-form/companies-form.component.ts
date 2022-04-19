import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { CompanyFormService } from "./companies-form.service";
import CompaniesModel from './companies-model';
// import './ckeditor.loader';
// import 'ckeditor';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';
import * as countriesTemp from './../../../../assets/countries.json';

@Component({
  selector: "ngx-companies-form",
  templateUrl: "./companies-form.component.html",
  styleUrls: ["./companies-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CompaniesFormComponent implements OnInit {
  dialogData: CompaniesModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  loading:boolean = false;
  fetchingStatus:boolean = false;
  tempCountries:any=countriesTemp;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private formService: CompanyFormService,
    private common: CommonService,
    private web: WebService,
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action;
    this.dialogData.action = context.action;
  }


  closeWindow() {
    this.windowRef.close();
  }


  firstLetterCapitalize(data:string){
    let a = data.split('').map((x,i)=>{if(i==0){x = x.toUpperCase();}return x;}).join('')
    return a;
  }


  async ngOnInit(): Promise<void> {

    console.log(this.dialogData, 'dialogdata');
    
    this.tempCountries = this.tempCountries.default;

  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.onSubmit(files);
    }
  }

  onSubmit(file: any) {
    let d = new Date();
    let n: any = d.valueOf();
    console.log(n);
    let fname = file[0].name;
    fname = fname.substring(fname.lastIndexOf('.') + 1, fname.length) || fname;
    let filename = 'EasyTravel_'+n.toString().substring(10)+file[0].name;
    const formData = new FormData();

    formData.append("image", file[0]);
    formData.append("image", filename);
    formData.append("profile_image", filename);
    console.log(filename);
    this.loading = true;
    this.web.uploadWebsitePicture(`${this.base_url}AppServer/upload_website_image.php?section=companies&filename=${filename}`, formData).subscribe((Res: any) => {
      this.loading = false;
      console.log(Res);
      if (Res.status == '200') {
        this.common.presentToast(Res.error, 'Success');
        this.dialogData.vehicles_vehicle_logo = filename;
      } else {
        this.common.presentToast(Res.error, 'Error')
      }
    }, (err) => {
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error')
    });

  }

  async submitFormResults(){

    let confirm = await this.formService.companiesFormValidation(this.dialogData);
    console.log(confirm);

    if(confirm){
      
      if(this.dialogAction=='add'){
        let phoneNum = (this.dialogData.selectedCountry || '')+ this.dialogData.vehicles_vehicle_phone;
        this.dialogData.vehicles_vehicle_phone = phoneNum;
      }
      
      console.log(this.dialogData);
      this.loading = true;
      this.web.postData('addCompanies', this.dialogData).then(res=>{
        this.loading = false;
        if(res.status=='200'){
          this.common.presentToast(res.error, 'Success');
          this.closeWindow();
        }else{
          if(this.dialogAction=='add'){
            this.dialogData.vehicles_vehicle_phone = '';
          }
          this.common.presentToast(res.error, 'Failed');
        }
      },err=>{
        this.loading = false;
        console.log(err, 'Error');
        this.common.presentToast('Connection Error', 'Failed');
      })
    }else{
      this.loading = false;
    }
  }


  timeStamptoDate(str:number){
    let d = new Date(str*1000);
    return d;
  }



}
