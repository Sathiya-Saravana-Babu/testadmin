import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService, NbWindowConfig } from "@nebular/theme";
import { UsersFormComponent } from "./users-form/users-form.component";
import { WebService } from "../../providers/web.service";
import { CommonService } from "../../providers/common.service";
import UsersModel from './users-form/users-model';
import {environment} from './../../../environments/environment';

@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class UsersComponent implements OnInit {
  //tableSettings:any;
  tableSource: UsersModel[];
  tableSourceTemp: UsersModel[];
  base_url: string = environment.base_url;
  loading:boolean;
  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
  ) {}

  tableSettings: any = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>'
    },
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      //confirmDelete: true,
    },
    actions: {
      columnTitle: "Actions",
      add: true,
      edit: true,
      delete: true,
      //   custom: [
      //   { name: 'viewrecord', title: '<i class="fa fa-eye"></i>'},
      // ],
      position: "right",
    },
    sort: true,
    mode: "external",
    pager: {
      perPage: 15
    },
    columns: {
      user_name: {
        title: "Name",
        type: "string",
      },
      user_phone_no:{
        title: "Phone No",
        type: "string"
      },
      user_register_type: {
        title: "Register via",
        type: "string",
        width: '150px',
        valuePrepareFunction:(data:string)=>{
          let a = data.split('').map((x,i)=>{if(i==0){x = x.toUpperCase();}return x;}).join('')
          return a;
        }
      },
      user_email: {
        title: "Email",
        type: "string",
      },
      user_active_status_html:{
        title: "Status",
        type: 'html',
        width: '30px',
        filter: false
      }
    },
  };

  ngOnInit(): void {

    this.getPageData();
  }

  onCustomAction(event: any) {
    console.log(event);
  }

  selectRow(event: any) {
    let id = event.data.web_id;
    let data = this.tableSourceTemp.filter(x => x.web_id==id)[0]
    let w = this.windowService.open(UsersFormComponent, {
      title: `View Users`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: data, action: 'view'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      //this.ngOnInit();
    });
  }

  createRow() {
    let w = this.windowService.open(UsersFormComponent, {
      title: `Add User`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: new UsersModel(), action: 'add'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  editRow(event: any) {

    let id = event.data.web_id;
    let data = this.tableSourceTemp.filter(x => x.web_id==id)[0]

    let w = this.windowService.open(UsersFormComponent, {
      title: `Edit Users`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: data, action: 'edit'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  deleteRow(event: any) {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.web.postData('userDelete', event.data).then(res=>{
        if(res.status=='200'){
          this.common.presentToast(res.error, 'Success');
          this.ngOnInit();
        }else{
          this.common.presentToast(res.error, 'Failed');
        }
      },err=>{
        this.common.presentToast('Connection Error')
      })
    }

  }

  getPageData() {
    this.loading = true;
    this.web.getData('getUsersInfo').then(res=>{
      this.loading = false;
      if(res.status=='200'){
        this.mappingTableData(res.data)
        // this.tableSource = res.data;
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    },err=>{
      this.loading = false;
      this.common.presentToast('Connection Error', 'Error');
    })
  }

  mappingTableData(val:any){
    this.tableSource = val;
    this.tableSourceTemp = JSON.parse(JSON.stringify(val));
    this.tableSource.map((x:UsersModel)=>{
      x.user_email = (x.user_email==null || x.user_email=='')?'---': x.user_email;
      x.user_phone_no = (x.user_phone_no==null || x.user_phone_no=='')?'---': x.user_phone_no;
      x.user_name = (x.user_name==null || x.user_name=='')?'---': x.user_name;

      let active = x.user_active_status==1;
      x.user_active_status_html = active?'<i class="far fa-check-circle check"></i>': '<i class="far fa-times-circle times"></i>';

      return x;
    })
  }



}
