import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRouting } from './users-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbToggleModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbDatepickerModule, NbRadioModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserFormService } from './users-form/users-form.service';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, UsersFormComponent],
  imports: [
    CommonModule,
    UsersRouting,
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
    ],
  entryComponents: [
    UsersComponent,
    UsersFormComponent
  ],
  providers: [
    UserFormService,
    DatePipe
  ]
})
export class UsersModule { }
