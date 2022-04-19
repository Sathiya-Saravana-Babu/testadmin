import { Injectable } from "@angular/core";
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

declare let $: any;
declare let WOW: any;

@Injectable({
  providedIn: "root",
})
export class CommonService {
  toasterTypes: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  companyDetail:any = {};
  constructor(private toastrService: NbToastrService) {}

  presentToast(msg: string, title: string='', duration: number=4500) {

    var config = {
      //status: 'type',
      destroyByClick: true,
      duration: duration,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
      pack: 'eva',
      icon: 'close-outline'
    };

    if(title=='Success'){
      config.icon = 'checkmark-outline'
      this.toastrService.success(msg, title,config);
      return;
    } else if(title=='Error'){
      this.toastrService.danger(msg, title,config);
      return;
    } else if(title=='Warning'){
      config.icon='alert-circle-outline';
      this.toastrService.info(msg, title,config);
      return;
    }

    this.toastrService.default(msg, title,config);
  }


  setCompanyDetails(data:any){
    this.companyDetail = data;
  }

  getCompanyDetails(){
    return this.companyDetail;
  }

  async validateCardNumber(str: string) {
    var re = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i;
    if (re.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  async validateCardExpiryDate(str: string) {
    var re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (re.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  async validateMobileNumber(val: any) {
    // var re = /^(\+\d{1,3}[- ]?)?\d{10}$/i;
    var re = /^((00|\+)[0-9]{2,5}|0)[1-9][0-9]{7,9}$/i;
    if (re.test(val)) {
      return true;
    } else {
      return false;
    }
  }

  async validateEmail(email: string) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email) && email.indexOf(" ") == -1;
  }


}
