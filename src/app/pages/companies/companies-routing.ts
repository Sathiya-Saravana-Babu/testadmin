import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies.component';

const routes: Routes = [{
  path: '',
  component: CompaniesComponent
  },
  {
    path: 'vehicles/:company',
    loadChildren: () => import('../vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompaniesRouting {
}
