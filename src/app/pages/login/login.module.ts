import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule
} from '@nebular/theme';
import { LoginRouting } from './login-routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbAuthModule,
    LoginRouting,
    NbSpinnerModule
  ]
})
export class LoginModule { }
