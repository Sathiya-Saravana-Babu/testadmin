import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesRouting } from './vehicles-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbToggleModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbDatepickerModule, NbRadioModule, NbAutocompleteModule,  } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VehicleFormService } from './vehicles-form/vehicles-form.service';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [VehiclesComponent, VehiclesFormComponent],
  imports: [
    CommonModule,
    VehiclesRouting,
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
     NbAutocompleteModule,
     NgxMaterialTimepickerModule
    ],
  entryComponents: [
    VehiclesComponent,
    VehiclesFormComponent
  ],
  providers: [
    VehicleFormService,
    DatePipe
  ]
})
export class VehiclesModule { }
