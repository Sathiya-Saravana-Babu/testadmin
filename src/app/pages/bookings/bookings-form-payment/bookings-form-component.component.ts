import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import BookingsModel from '../bookings-form/bookings-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "ngx-bookings-form",
  templateUrl: "./bookings-form-component.component.html",
  styleUrls: ["./bookings-form-component.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BookingsFormPaymentComponent implements OnInit {
  dialogData: BookingsModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  dialogDataPayment:any ={}
  dialogDataPaymentType:string;

  url:any;
  sanitize:any;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private common: CommonService,
    private sanitizer: DomSanitizer
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action
    this.sanitize = this.sanitizer;
  }

  closeWindow() {
    this.windowRef.close();
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

  async ngOnInit(): Promise<void> {
    this.dialogDataPaymentType = this.dialogData.webhook_type=='card_payment'?'Stripe':'MTN Pay';
    if(this.dialogDataPaymentType == 'Stripe'){
    let paymentArray = (JSON.parse(this.dialogData.webhook_response));
      this.dialogDataPayment.pay_amount = paymentArray.amount;
      this.dialogDataPayment.pay_transaction = paymentArray.id;
      this.dialogDataPayment.pay_time = paymentArray.created;
      this.dialogDataPayment.pay_receipt = paymentArray.receipt_url;
      this.dialogDataPayment.pay_status = paymentArray.status;
      this.url = this.sanitizer.bypassSecurityTrustUrl(this.dialogDataPayment.pay_receipt);

      console.log(this.dialogDataPayment);
    }else{
      this.dialogDataPayment = {};
    }
  }

  seperateStringintoJson(str:string){
    return JSON.parse(str);
  }

  timeStamptoDate(str:number){
    let d = new Date(str*1000);
    return d;
  }
}
