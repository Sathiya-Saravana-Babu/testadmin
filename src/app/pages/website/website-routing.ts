import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsitesComponent } from './website.component';

const routes: Routes = [{
  path: ':page',
  component: WebsitesComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsitesRouting {
}
