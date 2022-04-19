import { Injectable } from '@angular/core';
import WebsitesModel from './website-model';
import { CommonService } from '../../../providers/common.service';

@Injectable({
  providedIn: 'root'
})
export class WebsiteFormService {
  private formData: any = {}
  constructor(private common: CommonService) { }

  setFormData(val: any) {
    this.formData = val;
    console.log(this.getFormData());
  }

  getFormData() {
    return this.formData;
  }

  async websitesFormValidation(val: WebsitesModel) {



    return true;

  }


}
