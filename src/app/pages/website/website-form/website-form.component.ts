import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { WebsiteFormService } from "./website-form.service";
import WebsitesModel from './website-model';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';
import './ckeditor.loader';
import 'ckeditor';


@Component({
  selector: "ngx-websites-form",
  templateUrl: "./website-form.component.html",
  styleUrls: ["./website-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WebsitesFormComponent implements OnInit {
  dialogData: WebsitesModel;
  dialogAction:string;
  base_url:string = environment.base_url;
  loading:boolean = false;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private formService: WebsiteFormService,
    private common: CommonService,
    private web: WebService
  ) {
    this.dialogData = context.data;
    this.dialogAction = context.action;
    this.dialogData.action = context.action;
  }


  closeWindow() {
    this.windowRef.close()
  }



  async ngOnInit(): Promise<void> {

    console.log(this.dialogData);


  }

  pageNameTranslator(str:string){
    let a = str.split('_').map(x => (x.charAt(0).toUpperCase()+ x.slice(1))).join(' ');
    return a;
  }

  async submitFormResults(){

    if(this.dialogData.section_content=='' || this.dialogData.section_content==null){
      this.common.presentToast('Contents can not be empty', 'Error');
      document.getElementById('section_content').focus();
    } else if(this.dialogData.section_content_fr =='' || this.dialogData.section_content_fr==null){
      this.common.presentToast('Contents can not be empty', 'Error');
      document.getElementById('section_content_fr').focus();
    } else{

      this.loading = true;

      this.web.postData('websiteContentUpdate', this.dialogData).then(res=>{
        this.loading = false;
        if(res.status=='200'){

          this.closeWindow();
          this.common.presentToast(res.error, 'Success')
        }else{
          this.common.presentToast(res.error, 'Error')
        }
      },err=>{
        this.loading = false;
        console.log(err, 'Error');
        this.common.presentToast('Connection Error.', 'Error');
      })
    }


  }



}
