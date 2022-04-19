import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbToggleModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbDatepickerModule, NbRadioModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';

import { ShippingUsersComponent } from './shipping-users.component';
import { ShippingUsersRouting } from './shipping-users-routing';

@NgModule({
  declarations: [
    ShippingUsersComponent
  ],
  imports: [
    CommonModule,
    ShippingUsersRouting,
    NbCardModule,
    NbListModule,
    NbInputModule,
    FormsModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbToggleModule,
    NbWindowModule.forChild(),
    NbSpinnerModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbRadioModule
  ]
})
export class ShippingUsersModule { }
