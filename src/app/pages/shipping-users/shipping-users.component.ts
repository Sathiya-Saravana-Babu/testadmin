import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { CommonService } from '../../providers/common.service';
import { WebService } from '../../providers/web.service';

@Component({
  selector: "app-shipping-users",
  templateUrl: "./shipping-users.component.html",
  styleUrls: ["./shipping-users.component.scss"]
})
export class ShippingUsersComponent implements OnInit {

  loading: boolean;

  tableSource = [];

  tableSettings: any = {
    edit: {
      editButtonContent: '<i class="fa fa-eye"></i>',
    },
    actions: {
      columnTitle: "Actions",
      add: false,
      edit: true,
      delete: false,
      position: "right",
    },
    sort: true,
    mode: "external",
    pager: {
      perPage: 15
    },
    columns: {
      shipping_username: {
        title: "Name",
        type: "string",
      },
      shipping_email: {
        title: "Email",
        type: "string"
      },
      shipping_phone: {
        title: "Phone",
        type: "string",
      },
      shipping_global_shipping_rate: {
        title: "Global Shipping Rate (Fcfa)",
        type: "string",
        valuePrepareFunction: (data: string) => {
          return this.currencyConverter(data);
        }
      }
    }
  };

  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.web.getData('getShippingUsersInfo').then(res => {
      this.tableSource = res.data;
    }) 
  }

  currencyConverter(num: any) {
    if (num == "---") {
      return "----";
    }
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "CFA",
      minimumFractionDigits: 0,
    });
    return formatter.format(num).split(",").join(" ");
  }

  selectRow(event: any) {
    console.log(event);
    this.router.navigate(['/pages/shipping-users/info', event.data.web_id]);
  }
}
