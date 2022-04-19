import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingFormService {
  private formData:any = {}
  constructor() { }

  setFormData(val:any){
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData(){
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
}
