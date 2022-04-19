import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { CommonService } from '../../providers/common.service';
import { WebService } from '../../providers/web.service';
import { ShippingUserEditComponent } from './shipping-user-edit/shipping-user-edit.component';

@Component({
  selector: "app-shipping-user-info",
  templateUrl: "./shipping-user-info.component.html",
  styleUrls: ["./shipping-user-info.component.scss"]
})
export class ShippingUserInfoComponent implements OnInit {

  userInfo: any = [];
  
  packageInfo: any = [];

  zoneInfo: any = [];

  dialogData: any = {};

  showAlert: boolean;

  showProcess: boolean;

  priceValue: any = {};
  
  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllInfo(this.activatedRoute.snapshot.paramMap.get('company'));
  }

  getAllInfo(company) {
    this.web.getData('getAllShippingInfo?company=' + company).then(res => {
      console.log('data is', res);
      this.userInfo = res.data;
      this.packageInfo = res.package;
      this.zoneInfo = res.zone;
      this.dialogData = res;
      res.data.forEach((obj) => {
        this.showAlert = obj.shipping_status;
        if (obj.shipping_price_occuation) {
          this.showProcess = true;
        }
      });
    });
  }

  editPrice() {
    let data = {
      'shipping_dimension_price': '',
      'shipping_weight_price': '',
      'shipping_global_shipping_rate': '',
      'packages': []
    }
    this.userInfo.forEach((obj) => {
      data.shipping_dimension_price = obj.shipping_dimension_price;
      data.shipping_weight_price = obj.shipping_weight_price;
      data.shipping_global_shipping_rate = obj.shipping_global_shipping_rate;
    })
    this.packageInfo.forEach((obj) => {
      data.packages.push(obj);
    })
    let modal = this.windowService.open(ShippingUserEditComponent, {
      title: `Edit Price`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context: { data: data, web_id: this.activatedRoute.snapshot.paramMap.get('company')},
      windowClass: "formWindow",
    });

    modal.onClose.pipe().subscribe((res) => {
      this.ngOnInit();
    });
  }

  closeAlert() {
    this.web.postData('clearShippingStatus', { 'web_id': this.activatedRoute.snapshot.paramMap.get('company') }).then(res => {
      this.showAlert = false;
    });
  }

  closeProcess() {
    this.web.postData('clearShippingPrice', { 'web_id': this.activatedRoute.snapshot.paramMap.get('company') }).then(res => {
      this.showProcess = false;
    });
  }

  showPrice() {
    this.userInfo.forEach((obj) => {
      this.priceValue = JSON.parse(obj.shipping_price_occuation);
      console.log(this.priceValue);
    });
  }
}
