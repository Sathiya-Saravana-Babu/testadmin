import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import { BookingsRouting } from './bookings-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbAlertModule, NbSpinnerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BookingFormService } from './bookings-form/booking-form.service';
import { BookingsFormComponent } from './bookings-form/bookings-form.component';
import { BookingsFormPaymentComponent } from './bookings-form-payment/bookings-form-component.component';
//import { DataTableModule } from 'ng-angular9-datatable';



@NgModule({
  declarations: [BookingsComponent, BookingsFormComponent, BookingsFormPaymentComponent],
  imports: [
    CommonModule,
    BookingsRouting,
    NbCardModule,
    NbListModule,
     Ng2SmartTableModule,
     NbWindowModule.forChild(),
     NbAlertModule,
     NbSpinnerModule
    //DataTableModule
  ],
  entryComponents: [
    BookingsComponent,
    BookingsFormComponent,
    BookingsFormPaymentComponent
  ],
  providers: [
    BookingFormService,
    DatePipe
  ]
})
export class BookingsModule { }
