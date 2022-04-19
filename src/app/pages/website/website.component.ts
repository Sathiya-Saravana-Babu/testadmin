import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService, NbWindowConfig } from "@nebular/theme";
import { WebsitesFormComponent } from "./website-form/website-form.component";
import { WebService } from "../../providers/web.service";
import { CommonService } from "../../providers/common.service";
import WebsitesModel from './website-form/website-model';
import {environment} from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "ngx-websites",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class WebsitesComponent implements OnInit {
  pageName:string;
  tableSource: any[];
  tableSourceTemp: any[];
  base_url: string = environment.base_url;
  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
    private activeRoute: ActivatedRoute
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
      add: false,
      edit: true,
      delete: false,
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
      section_name: {
        title: "Section Position",
        type: "string",
        valuePrepareFunction:(data:string)=>{
          let a = data.split('_').map(x => (x.charAt(0).toUpperCase()+ x.slice(1))).join(' ');
          return a;
        }
      },
      section_title:{
        title: "Section name",
        type: "string",
        valuePrepareFunction:(data:string)=>{
          let a = data.split('_').map(x => (x.charAt(0).toUpperCase()+ x.slice(1))).join(' ');
          return a;
        }
      },
      section_content: {
        title: "Content",
        type: "html",
        valuePrepareFunction:(data:string)=>{
          let a = (data.length>100) ? data.substring(0, 100) +' ...': data;
          return a;
        }
      },
    },
  };

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe((paramData:any)=>{
      console.log(paramData);
      if(!paramData.has('page')){
          return
      }
      this.getPageData(paramData.params.page);
      this.pageNameCalculator(paramData.params.page);
  });
  }



  createRow() {
    let w = this.windowService.open(WebsitesFormComponent, {
      title: `Add Website`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: new WebsitesModel(), action: 'add'} ,
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
      this.web.postData('websiteDelete', event.data).then(res=>{
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

  editRow(event: any) {

    let w = this.windowService.open(WebsitesFormComponent, {
      title: `Edit Websites`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'edit'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  getPageData(page:string) {
    this.web.getData('getWebsites?page='+page).then(res=>{
      if(res.status=='200'){
        this.mappingTableData(res.data)
        // this.tableSource = res.data;
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    },err=>{
      this.common.presentToast('Connection Error', 'Error');
    })
  }

  mappingTableData(val:any){
    this.tableSource = val;
    this.tableSourceTemp = JSON.parse(JSON.stringify(val));
    this.tableSource.map((x:any)=>{
      return x;
    })
  }


  pageNameCalculator(page:string){
    console.log(page);
    this.pageName = ( page=='home')?'Home':(page=='trains')?'Traings':(page=='flights')?'Flights':(page=='parcels')?'Parcels':(page=='your_bookings')?'Your Bookings':(page=='who_we_are')?'Who We Are':(page=='terms')?'Terms of use':(page=='become_a_partner')?'Become a partner':'Privacy policy';
  }


  selectRow(event: any) {

    let w = this.windowService.open(WebsitesFormComponent, {
      title: `View Content`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'view'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      //this.ngOnInit();
    });
  }


}
