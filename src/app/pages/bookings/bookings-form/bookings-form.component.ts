import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { BookingFormService } from "./booking-form.service";
import BookingsModel from './bookings-model';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';

@Component({
  selector: "ngx-bookings-form",
  templateUrl: "./bookings-form.component.html",
  styleUrls: ["./bookings-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BookingsFormComponent implements OnInit {
  dialogData: BookingsModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  round_trip:boolean = false;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private common: CommonService,
    private bookingService: BookingFormService
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action
  }

  AMPMConverter(val: any, need: string = "") {
    let valTemp = val.split(":");
    let hours = valTemp[0];
    let minutes = valTemp[1];
    let glue = " AM";
    if (hours > 12) {
      hours = hours - 12;
      glue = " PM";
    }

    if (need == "") {
      return "<b>" + hours + ":" + minutes + "<span>" + glue + "</span></b>";
    } else {
      return hours + ":" + minutes + glue;
    }
  }


  closeWindow() {
    this.windowRef.close();
  }


  currencyConverter(num: any) {
   return this.bookingService.currencyConverter(num);
  }


  async ngOnInit(): Promise<void> {
    console.log(this.dialogData);
    this.round_trip = (this.dialogData.class_name_round==null || this.dialogData.class_name_round=='')?false: true;
    // if(this.dialogData.webhook_type == 'card_payment'){
    // this.dialogData.bookings_amount = (JSON.parse(this.dialogData.webhook_response)).amount;
    // }
  }


  // fillInfo(){
  //     this.dialogData.bookings_amount = JSON.parse(this.dialogData.webhook_response);
  //   }

  // }

  seperateStringintoJson(str:string){
    return JSON.parse(str);
  }

  timeStamptoDate(str:number){
    let d = new Date(str*1000);
    return d;
  }


  passengerConverter() {
    if(this.dialogData == null){
      return;
    }

    let tripMode = this.dialogData.class_name==null?'single': 'round';
    let adultPrice = tripMode=='single'?this.dialogData.routes_adult_price: this.dialogData.routes_adult_round_price;

    let infantPrice = tripMode=='single'?this.dialogData.routes_infant_price: this.dialogData.routes_infant_round_price;

    if (
      this.dialogData.bookings_adult_count == 1 &&
      this.dialogData.bookings_infant_count == 0
    ) {
      return "1 Adult x "+adultPrice;
    } else if (
      this.dialogData.bookings_adult_count > 1 &&
      this.dialogData.bookings_infant_count == 0
    ) {
      return this.dialogData.bookings_adult_count + " Adults x "+adultPrice;
    } else if(this.dialogData.bookings_adult_count == 0 && this.dialogData.bookings_infant_count==1 ){
      return "1 Kid x "+infantPrice;
    } else if(this.dialogData.bookings_adult_count == 0 && this.dialogData.bookings_infant_count >1){
      return this.dialogData.bookings_adult_count + " Kids x "+infantPrice;
    }
    else {
      return (
       this.dialogData.bookings_adult_count + ' Adults x '+adultPrice+', '+
        this.dialogData.bookings_adult_count + ' Kids x '+infantPrice
      );
    }
  }



}
