import { Injectable } from '@angular/core';
import VehiclesModel from './vehicles-model';
import { CommonService } from '../../../providers/common.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleFormService {
  private formData: any = {}
  constructor(private common: CommonService) { }

  setFormData(val: any) {
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData() {
    return this.formData;
  }

  currencyConverter(num: any) {
    if (num == "---") {
      return "----";
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "CFA",
      minimumFractionDigits: 0,
    });

    return formatter.format(num).split(",").join(" ");
  }

  vehiclesFormValidation(val: VehiclesModel) {
    if(val.routes_vehicle_id==null || val.routes_vehicle_id==0){
      this.common.presentToast('Fields are missing', 'Error');
      return false;
    } else if(val.routes_starting_point==null || val.routes_starting_point==''){
      this.common.presentToast('Choose starting point', 'Error');
      return false;
    } else if(val.routes_ending_point==null || val.routes_ending_point==''){
      this.common.presentToast('Choose ending point', 'Error');
      return false;
    } else if(val.routes_departure_time==null || val.routes_departure_time==''){
      this.common.presentToast('Choose departure time for outgoing trip', 'Error');
      return false;
    } else if(val.routes_arriving_time==null || val.routes_arriving_time==''){
      this.common.presentToast('Choose arrival time for outgoing trip', 'Error');
      return false;
    } else if(val.routes_departure_time_round==null || val.routes_departure_time_round==''){
      this.common.presentToast('Choose departure time for return trip', 'Error');
      return false;
    } else if(val.routes_arriving_time_round==null || val.routes_arriving_time_round==''){
      this.common.presentToast('Choose arrival time for return trip', 'Error');
      return false;
    }

    let priceRegex = /^[1-9]\d*$/;
    if(val.routes_adult_price==null || val.routes_adult_price==0){
      this.common.presentToast('Enter price amount for adult - single trip', 'Error');
      return false;
    } else if(priceRegex.test(val.routes_adult_price.toString())==false){
      this.common.presentToast('Price amount is invalid for adult - single trip', 'Error');
      return false;
    } else if(val.routes_infant_price==null || val.routes_infant_price==0){
      this.common.presentToast('Enter price amount for infant - single trip', 'Error');
      return false;
    } else if(priceRegex.test(val.routes_infant_price.toString())==false){
      this.common.presentToast('Price amount is invalid for infant - single trip', 'Error');
      return false;
    } else if(val.routes_adult_round_price==null || val.routes_adult_round_price==0){
      this.common.presentToast('Enter price amount for adult - round trip', 'Error');
      return false;
    } else if(priceRegex.test(val.routes_adult_round_price.toString())==false){
      this.common.presentToast('Price amount is invalid for adult - round trip', 'Error');
      return false;
    } else if(val.routes_infant_round_price==null || val.routes_infant_round_price==0){
      this.common.presentToast('Enter price amount for infant - round trip', 'Error');
      return false;
    } else if(priceRegex.test(val.routes_infant_round_price.toString())==false){
      this.common.presentToast('Price amount is invalid for infant - round trip', 'Error');
      return false;
    }

    if(val.routes_travel_type==null || val.routes_travel_type==0){
      this.common.presentToast('Choose travel class', 'Error');
      return false;
    } else{
      return true;
    }


    return false;

  }

}
