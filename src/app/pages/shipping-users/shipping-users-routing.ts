import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingUsersComponent } from './shipping-users.component';

const routes: Routes = [
  {
  path: '',
  component: ShippingUsersComponent
  },
  {
    path: 'info/:company',
    loadChildren: () => import('../shipping-user-info/shipping-user-info.module').then(m => m.ShippingUserInfoModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShippingUsersRouting {
}
