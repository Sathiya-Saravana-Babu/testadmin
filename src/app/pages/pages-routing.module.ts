import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'bookings',
      loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'customers',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'website',
      loadChildren: () => import('./website/website.module').then(m => m.WebsitesModule)
    },{
      path: 'contents',
      loadChildren: () => import('./contents/content.module').then(m => m.ContentsModule)
    },
    {
      path: 'companies',
      loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule)
    },
    {
      path: 'shipping-users',
      loadChildren: () => import('./shipping-users/shipping-users.module').then(m => m.ShippingUsersModule)
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
