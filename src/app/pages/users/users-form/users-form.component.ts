import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { UserFormService } from "./users-form.service";
import UsersModel from './users-model';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';
import * as countriesTemp from './../../../../assets/countries.json';

@Component({
  selector: "ngx-users-form",
  templateUrl: "./users-form.component.html",
  styleUrls: ["./users-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class UsersFormComponent implements OnInit {
  dialogData: UsersModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  loading:boolean = false;
  fetchingStatus:boolean = false;

  selectedCountry:any = {};
  tempCountries:any=countriesTemp;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private formService: UserFormService,
    private common: CommonService,
    private web: WebService
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action;
    this.dialogData.action = context.action;
  }


  closeWindow() {
    this.windowRef.close();
  }

  countryNameCalculator(code:number){
    let country = this.tempCountries.filter((x:any) => x.id == code)[0];
    return country.name;
  }


  firstLetterCapitalize(data:string){
    let a = data.split('').map((x,i)=>{if(i==0){x = x.toUpperCase();}return x;}).join('')
    return a;
  }


  async ngOnInit(): Promise<void> {

    console.log(this.dialogData);
    this.dialogData.user_active_status = this.dialogData.user_active_status == 1 ;
    this.dialogData.user_email_subscription = this.dialogData.user_email_subscription == 1 ;
    if(this.dialogAction=='add'){
      this.dialogData.user_register_type='admin';
    }

    this.tempCountries = this.tempCountries.default;

  }

  async submitFormResults(){
    console.log(this.dialogData);
    let confirm = await this.formService.usersFormValidation(this.dialogData);
    console.log(confirm);
    if(confirm){

      if(this.dialogAction=='add'){
        let phoneNum = (this.dialogData.selectedCountry || '')+ this.dialogData.user_phone_no;
        this.dialogData.user_phone_no = phoneNum;
      }
      this.loading = true;
      this.web.postData('userAddAndEdit', this.dialogData).then(res=>{
        console.log(this.dialogData)
        this.loading = false;
        if(res.status=='200'){

          if(this.dialogAction=='add'){
            let data = {
              twilio_auth: "twilio_easytravel",
              phone_no: this.dialogData.user_phone_no,
              password: this.dialogData.user_password,
              type: "register",
            };



            this.web.sendNotificationRegister(data).then(
              (res) => {
                if (res.status == "200") {
                } else {
                  this.common.presentToast(res.error, 'Error');
                }
              },
              (err) => {

                console.log(err, 'Error');
                //this.common.presentToast('Connection Errror');
              }
            );
          }

          this.closeWindow();
          this.common.presentToast(res.error, 'Success')
        }else{
          this.dialogData.user_phone_no = '';
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
