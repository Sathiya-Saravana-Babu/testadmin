import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingUserInfoComponent } from './shipping-user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ShippingUserInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShippingUserInfoRouting {
}
