import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRouting } from './companies-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbToggleModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbDatepickerModule, NbRadioModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CompanyFormService } from './companies-form/companies-form.service';
import { CompaniesFormComponent } from './companies-form/companies-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompaniesComponent, CompaniesFormComponent],
  imports: [
    CommonModule,
    CompaniesRouting,
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
    ],
  entryComponents: [
    CompaniesComponent,
    CompaniesFormComponent
  ],
  providers: [
    CompanyFormService
    ]
})
export class CompaniesModule { }
