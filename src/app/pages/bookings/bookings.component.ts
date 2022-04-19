import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService, NbWindowConfig } from "@nebular/theme";
import { BookingsFormComponent } from "./bookings-form/bookings-form.component";
import { BookingFormService } from "./bookings-form/booking-form.service";
import { WebService } from "../../providers/web.service";
import { CommonService } from "../../providers/common.service";
import { DatePipe } from '@angular/common';
import BookingsModel from './bookings-form/bookings-model';
import {environment} from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { BookingsFormPaymentComponent } from './bookings-form-payment/bookings-form-component.component';

@Component({
  selector: "ngx-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BookingsComponent implements OnInit {
  //tableSettings:any;
  tableSource: BookingsModel[];
  base_url: string = environment.base_url;
  tableAmount:any = {}
  loading:boolean = false;
  constructor(
    private windowService: NbWindowService,
    private formService: BookingFormService,
    private web: WebService,
    private common: CommonService,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute
  ) {}

  tableSettings: any = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-eye"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-ticket-alt text-secondary"></i>',
      //confirmDelete: true,
    },
    actions: {
      columnTitle: "ACTIONS",
      add: false,
      edit: true,
      delete: true,
      //   custom: [
      //   { name: 'viewrecord', title: '<i class="fa fa-eye"></i>'},
      // ],
      position: "right",
    },
    sort: true,
    mode: "external",
    pager: {
      perPage: 15
    },
    columns: {
      vehicles_vehicle_type: {
        title: 'CATEGORY',
        type: 'string',
        width: '20px',
        // valuePrepareFunction:(data:string)=>{
        //   let a = data=='flight' ? 'Airline' : data=='bus' ? 'Bus' : 'Train';
        //   return a;
        // }
      },
      vehicles_vehicle_name: {
        title: 'TRANSPORTER',
        type: 'string'
      },
      bookings_starting_point: {
        title: "FROM",
        type: "string",
      },
      bookings_ending_point: {
        title: "TO",
        type: "string",
      },
      bookings_travel_date: {
        title: 'DATE',
        type: "html"
      },
      webhook_type:{
        title: 'PAYMENT METHOD',
        type:'string',
        valuePrepareFunction:(data:string)=>{
          let a = data=='card_payment' ? 'CARD' : 'MTN PAY';
          return a;
        }
      },
      bookings_amount:{
        title: "TICKET AMOUNT",
        type: "string",
        valuePrepareFunction: (data:string)=>{
          return this.currencyConverter(data);
        }
      },
      bookings_amount_commission:{
        title: "COMMISSIONS",
        type: "string",
        valuePrepareFunction: (data:string)=>{
          return this.currencyConverter(data);
        }
      },

    },
  };

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe((paramData:any)=>{
      console.log(paramData);
      if(!paramData.has('vehicle')){
          return
      }
      this.getPageData(paramData.params.vehicle);
  });

  }

  onCustomAction(event: any) {
    console.log(event);
  }

  selectRow(event: any) {
    // this.formService.setFormData({ data: event.data });

    //console.log(this.formService.getFormData());
    let w = this.windowService.open(BookingsFormComponent, {
      title: `View Bookings`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'view'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  createRow() {

  }


  currencyConverter(num:any){
   return this.formService.currencyConverter(num);
  }

  deleteRow(event: any) {

    let w = this.windowService.open(BookingsFormPaymentComponent, {
      title: 'View Payment',
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context: {data: event.data, action: 'payment'},
      windowClass: "formWindow"
    });

    w.onClose.pipe().subscribe((res)=>{
      console.log(res);
    });

  }

  editRow(event: any) {

    let w = this.windowService.open(BookingsFormComponent, {
      title: `View Bookings`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'view'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }


  getPageData(vehicle:string) {
    this.loading = true;
    this.web.getData('getBookingsInfo?vehicle='+vehicle).then(res=>{
      this.loading = false;
      if(res.status=='200'){
        this.mappingTableData(res.data);
        this.tableAmount = res.amount;
        // this.tableSource = res.data;
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    },err=>{
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error');
    })
  }

  mappingTableData(val:any){
    this.tableSource = val.filter(x => x.bookings_starting_point!=null);
    //this.tableSource = this.tableSource.reverse();
    this.tableSource.map((x:BookingsModel)=>{
      let date = x.bookings_travel_date;
      date = this.datePipe.transform(date);
      x.bookings_travel_date = date;

      if(x.bookings_travel_return_date){
        let date_round = x.bookings_travel_return_date;
        date_round = this.datePipe.transform(date_round);
        x.bookings_travel_return_date = date_round;
      }

      x.vehicles_vehicle_type = x.vehicles_vehicle_type=='flight' ? 'Airline' : x.vehicles_vehicle_type=='bus' ? 'Bus' : 'Train';

      x.bookings_username = x.bookings_username || '----';
      x.bookings_passengers = this.passengerConverter({adults:x.bookings_adult_count, kids: x.bookings_infant_count});
      return x;
    })
  }

  passengerConverter(val:any) {
    if (val.adults == 1 &&val.kids == 0) {
      return "1 Adult";
    } else if (val.adults > 1 && val.kids == 0) {
      return val.adults + " Adults";
    } else {
      return (parseInt(val.adults) +parseInt(val.kids) +" Passengers");
    }
  }


}
