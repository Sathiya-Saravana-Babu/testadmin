import { Component, Inject } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { CommonService } from '../../../providers/common.service';
import { WebService } from '../../../providers/web.service';

@Component({
  selector: "app-shipping-user-edit",
  templateUrl: "./shipping-user-edit.component.html",
  styleUrls: ["./shipping-user-edit.component.scss"]
})
export class ShippingUserEditComponent {

  loading: boolean;

  userInfo: any = [];

  packageInfo: any = [];

  dialogData;

  id;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private web: WebService,
    private commonService: CommonService,
    public windowRef: NbWindowRef,
  ) {
    // this.userInfo = context.data.data;
    // this.packageInfo = context.data.package
    this.dialogData = context.data;
    this.id = context.web_id;
    console.log('id is', context.data)
  }

  closeWindow() {
    this.windowRef.close();
  }

  updataPrice() {
    let data = {
      'web_id': '',
      'shipping_price_occuation': ''
    }
    data.web_id = this.id;
    data.shipping_price_occuation = JSON.stringify(this.dialogData);
    console.log(this.dialogData);
    console.log('data is', data);
    this.web.postData('editShippingPrice', data).then(res => {
      this.loading = false;
      if (res.status == '200') {
        this.commonService.presentToast('success', 'Success', res.error);
        this.closeWindow();
      } else {
        this.commonService.presentToast('danger', 'Error', res.error);
      }
    }, err => {
      this.loading = false;
      this.commonService.presentToast('danger', 'Error');
    })
  }
}
