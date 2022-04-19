import { Injectable } from '@angular/core';
import ContentsModel from './content-model';
import { CommonService } from '../../../providers/common.service';

@Injectable({
  providedIn: 'root'
})
export class ContentFormService {
  private formData: any = {}
  constructor(private common: CommonService) { }

  setFormData(val: any) {
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData() {
    return this.formData;
  }

  async contentsFormValidation(val: ContentsModel) {
    let section = val.section_name;
    let page = val.page_name;

    if(section =='slider'){
      if(val.page_name==null || val.page_name==''){
        this.common.presentToast('Please choose the page', 'Error');
        return false;
      }else if(val.section_image=='' || val.section_image==null){
        this.common.presentToast('Please choose image', 'Error');
        return false;
      }else{
        return true;
      }
    }

    if(section=='banner'){
      if(val.section_image==null || val.section_image==''){
        this.common.presentToast('Please choose the image', 'Error');
        return false;
      }else{
        return true;
      }
    }

    if(section=='social_link'){
      let re = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;

      if(val.section_content==null || val.section_content==''){
         this.common.presentToast('Enter address url', 'Error');
         return false;
       } else if(re.test(val.section_content)==false) {
        this.common.presentToast('Enter valid address url.', 'Error');
         return false;
       }else{
         return true;
       }
     }


    if(page=='contactus' || section=='faq_item'){
      if(val.section_title==null || val.section_title==''){
        this.common.presentToast('Enter section title', 'Error');
        return false;
      } else  if(val.section_title_fr==null || val.section_title_fr==''){
        this.common.presentToast('Enter section title for francaise', 'Error');
        return false;
      } else  if(val.section_content==null || val.section_content==''){
        this.common.presentToast('Enter section content', 'Error');
        return false;
      } else  if(val.section_content_fr==null || val.section_content_fr==''){
        this.common.presentToast('Enter section content for francaise', 'Error');
        return false;
      } else {
        return true;
      }
    }


    return false;

  }


}
