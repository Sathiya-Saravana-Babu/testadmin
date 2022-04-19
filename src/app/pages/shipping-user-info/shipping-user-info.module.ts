import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbToggleModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbDatepickerModule, NbRadioModule, NbIconModule, NbPopoverModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';

import { ShippingUserInfoComponent } from './shipping-user-info.component';
import { ShippingUserInfoRouting } from './shipping-user-info-routing';
import { ShippingUserEditComponent } from './shipping-user-edit/shipping-user-edit.component';

@NgModule({
  declarations: [
    ShippingUserInfoComponent,
    ShippingUserEditComponent
  ],
  imports: [
    CommonModule,
    ShippingUserInfoRouting,
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
    NbRadioModule,
    NbIconModule,
    NbPopoverModule,
  ],
  entryComponents: [
    ShippingUserEditComponent
  ]
})
export class ShippingUserInfoModule { }
