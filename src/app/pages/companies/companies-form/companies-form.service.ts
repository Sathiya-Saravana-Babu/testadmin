import { Injectable } from '@angular/core';
import { CommonService } from '../../../providers/common.service';
import CompaniesModel from './companies-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyFormService {
  private formData: any = {}
  constructor(private common: CommonService) { }

  setFormData(val: any) {
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData() {
    return this.formData;
  }

  async companiesFormValidation(val: CompaniesModel):Promise<boolean> {
    let action = val.action=="add";
    let phoneNum = (val.selectedCountry || '') + val.vehicles_vehicle_phone;
    console.log(phoneNum)

    if(val.vehicles_vehicle_name==null || val.vehicles_vehicle_name==''){
      this.common.presentToast('Enter company name', 'Field is missing')
      return false;
    }else if(val.vehicles_vehicle_email==null || val.vehicles_vehicle_email==''){
      this.common.presentToast('Enter company email', 'Field is missing')
      return false;
    }else if (await this.common.validateEmail(val.vehicles_vehicle_email) == false) {
      this.common.presentToast('Enter valid email address', 'Invalid address');
      return false;
    }else if (phoneNum == null || phoneNum == '') {
      this.common.presentToast('Enter phone number', 'Field is missing');
      return false;
    } else if (await this.common.validateMobileNumber(phoneNum) == false) {
      this.common.presentToast('Enter valid phone number', 'Invalid number');
      return false;
    }else if (val.vehicles_vehicle_password == '' || val.vehicles_vehicle_password == null) {
      this.common.presentToast('Please enter password', 'Field is missing');
      return false;
    } else if (val.vehicles_vehicle_password.length < 6) {
      this.common.presentToast('Password should have 6 or more characters.')
      return false;
    } else if(val.vehicles_vehicle_logo==null || val.vehicles_vehicle_logo==''){
      this.common.presentToast('Choose company logo', 'Field is missing')
      return false;
    } else {
      return true;
    }

    return false;
  }

}
