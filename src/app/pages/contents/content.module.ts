import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContentsComponent } from './content.component';
import { ContentsRouting } from './content-routing';
import { NbCardModule, NbWindowModule, NbListModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbSelectModule, NbAlertModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContentFormService } from './content-form/content-form.service';
import { ContentsFormComponent } from './content-form/content-form.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [ContentsComponent, ContentsFormComponent],
  imports: [
    CommonModule,
    ContentsRouting,
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
    ContentsComponent,
    ContentsFormComponent
  ],
  providers: [
    ContentFormService,
    DatePipe
  ]
})
export class ContentsModule { }
