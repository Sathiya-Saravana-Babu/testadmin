import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { NbWindowRef, NB_WINDOW_CONTEXT } from "@nebular/theme";
import { ContentFormService } from "./content-form.service";
import ContentsModel from './content-model';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';
import './ckeditor.loader';
import 'ckeditor';


@Component({
  selector: "ngx-contents-form",
  templateUrl: "./content-form.component.html",
  styleUrls: ["./content-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ContentsFormComponent implements OnInit {
  dialogData: ContentsModel;
  dialogAction: string;
  base_url: string = environment.base_url;
  loading: boolean = false;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    public windowRef: NbWindowRef,
    private formService: ContentFormService,
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

  deleteItem() {
    if (window.confirm('Are you sure to delete an item..?')) {
      this.loading = true;
      this.web.postData('deleteWebsiteContent', { id: this.dialogData.web_id }).then(res => {
        this.loading = false;
        if (res.status == '200') {
          this.common.presentToast(res.error, 'Success');
          this.closeWindow();
        } else {
          this.common.presentToast(res.error, 'Error')
        }
      }, err => {
        this.loading = false;
        console.log(err);
        this.common.presentToast('Connection Error', 'Error')
      })
    }
  }


  async ngOnInit(): Promise<void> {
    console.log(this.dialogData);
  }



  onFileChange(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.onSubmit(files);
    }
  }

  onSubmit(file: any) {
    let d = new Date();
    let n: any = d.valueOf();
    let fname = file[0].name;
    fname = fname.substring(fname.lastIndexOf('.') + 1, fname.length) || fname;
    let filename = 'EasyTravel_'+n.toString().substring(4, 8)+file[0].name;
    const formData = new FormData();

    formData.append("image", file[0]);
    formData.append("image", filename);
    formData.append("profile_image", filename);
    console.log(filename);
    this.loading = true;
    this.web.uploadWebsitePicture(`${this.base_url}AppServer/upload_website_image.php?section=` + this.dialogData.section_name+'&filename='+filename, formData).subscribe((Res: any) => {
      this.loading = false;
      console.log(Res);
      if (Res.status == '200') {
        this.common.presentToast(Res.error, 'Success');
        this.dialogData.section_image = filename;
      } else {
        this.common.presentToast(Res.error, 'Error')
      }
    }, (err) => {
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error')
    });

  }


  pageNameTranslator(str: string) {
    let a = str.split('_').map(x => (x.charAt(0).toUpperCase() + x.slice(1))).join(' ');
    return a;
  }

  async submitFormResults() {

    let confirm = await this.formService.contentsFormValidation(this.dialogData);
    if(!confirm){
      return;
    }

    this.loading = true;

    this.web.postData('updateOtherContent', this.dialogData).then(res => {
      this.loading = false;
      if (res.status == '200') {

        this.closeWindow();
        this.common.presentToast(res.error, 'Success')
      } else {
        this.common.presentToast(res.error, 'Error')
      }
    }, err => {
      this.loading = false;
      console.log(err, 'Error');
      this.common.presentToast('Connection Error.', 'Error');
    })
    // }


  }



}
