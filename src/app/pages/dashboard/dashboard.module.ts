import { NgModule } from '@angular/core';
import {
  NbButtonModule,

  NbListModule,
  NbIconModule, NbCardModule, NbSpinnerModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    ChartModule,
    NbSpinnerModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
