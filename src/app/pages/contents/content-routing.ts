import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './content.component';

const routes: Routes = [{
  path: ':section',
  component: ContentsComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentsRouting {
}
