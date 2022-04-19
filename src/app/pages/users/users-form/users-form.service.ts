import { Injectable } from '@angular/core';
import UsersModel from './users-model';
import { CommonService } from '../../../providers/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  private formData: any = {}
  constructor(private common: CommonService) { }

  setFormData(val: any) {
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData() {
    return this.formData;
  }

  async usersFormValidation(val: UsersModel) {

    let phoneNum = (val.selectedCountry || '') + val.user_phone_no;
    //console.log(phoneNum);
    // if(val.user_phone_no=='' && val.user_email==''){
    //   this.common.presentToast('Please fill phone number or email', 'Field is missing');
    //   return false;
    // }
    if (phoneNum != '' && phoneNum != null) {
      if (await this.common.validateMobileNumber(phoneNum) == false) {
        this.common.presentToast('Enter valid phone number', 'Invalid number');
        return false;
      }
    }

    if (val.action == 'add') {
      if (phoneNum == null || phoneNum == '') {
        this.common.presentToast('Enter phone number', 'Field is missing');
        return false;
      } else if (await this.common.validateMobileNumber(phoneNum) == false) {
        this.common.presentToast('Enter valid phone number', 'Invalid number');
        return false;
      } else if (val.user_password == '' || val.user_password == null) {
        this.common.presentToast('Please enter password', 'Field is missing');
        return false;
      } else if (val.user_password.length < 6) {
        this.common.presentToast('Password should have 6 or more characters.')
        return false;
      }
    }

    if (val.user_email != '' && val.user_email != null) {
      console.log(val.user_email);
      if (await this.common.validateEmail(val.user_email) == false) {
        this.common.presentToast('Enter valid email address', 'Invalid address');
        return false;
      }
    }

    return true;

  }

}
