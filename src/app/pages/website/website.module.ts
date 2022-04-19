import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WebsitesComponent } from './website.component';
import { WebsitesRouting } from './website-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbAlertModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WebsiteFormService } from './website-form/website-form.service';
import { WebsitesFormComponent } from './website-form/website-form.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [WebsitesComponent, WebsitesFormComponent],
  imports: [
    CommonModule,
    WebsitesRouting,
    NbCardModule,
    NbListModule,
    NbInputModule,
    FormsModule,
     Ng2SmartTableModule,
     NbButtonModule,
     NbWindowModule.forChild(),
     NbSpinnerModule,
     NbSelectModule,
     NbAlertModule,
     CKEditorModule
  ],
  entryComponents: [
    WebsitesComponent,
    WebsitesFormComponent
  ],
  providers: [
    WebsiteFormService,
    DatePipe
  ]
})
export class WebsitesModule { }
