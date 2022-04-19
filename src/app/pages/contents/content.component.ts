import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService, NbWindowConfig } from "@nebular/theme";
import { ContentsFormComponent } from "./content-form/content-form.component";
import { WebService } from "../../providers/web.service";
import { CommonService } from "../../providers/common.service";
import ContentsModel from './content-form/content-model';
import {environment} from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "ngx-contents",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class ContentsComponent implements OnInit {
  pageName:string;
  tableSource: any[];
  tableSourceTemp: any[];
  base_url: string = environment.base_url;

  webSubscription:any;
  loading:boolean;

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
      perPage: 10
    },
    columns: {
      page_name: {
        title: "Page",
        type: "string",
        width: '150px',
        valuePrepareFunction:(data:string)=>{
          let a = data.charAt(0).toUpperCase()+ data.slice(1);
          return a;
        }
      },
      section_name:{
        title: "Section name",
        type: "string",
        width: '200px',
        show: false,
        valuePrepareFunction:(data:string)=>{
          let a = data.charAt(0).toUpperCase()+ data.slice(1);
          return a;
        }
      },
      section_title: {
        title: "Section title",
        type: 'string',
        valuePrepareFunction:(data:string)=>{
          if(data){
            return data;
          }else{
            return '---';
          }
        }
      },
      section_content: {
        title: "Content",
        type: "html",
        valuePrepareFunction:(data:string, row:ContentsModel)=>{
          let path = 'uploads/sliders/';
          if(row.section_name=='banner'){
            path = 'uploads/banners/';
          }
          let a = '';
          if(row.need_image_upload=='1'){
            a = '<img class="slider_image" src="'+this.base_url+path+row.section_image+'">';
          }else{
            a = data.length>100?data.substring(0, 100)+'...': data;
          }
          // let a = (data.length>100) ? data.substring(0, 100) +' ...': data;
          return a;
        }
      },
    },
  };

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe((paramData:any)=>{
      console.log(paramData);
      if(!paramData.has('section')){
          return
      }
      if(!this.loading){
        this.getPageData(paramData.params.section);
      }
      this.pageNameCalculator(paramData.params.section);
    });
  }

  ngOnDestroy(){
    console.log('destroy');
    // if(this.webSubscription){
    //   this.webSubscription.unsubscribe();
    // }
  }



  createRow() {

    let d = this.createRowCalculate();

    let w = this.windowService.open(ContentsFormComponent, {
      title: `Add Content`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: d, action: 'add'} ,
      windowClass: "formWindow",
    });

   this.webSubscription = w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  createRowCalculate(){
    let data = new ContentsModel;
    let pageName = this.pageName;
    if(pageName == 'Banner' || pageName=='Slider'){
      data.section_name = pageName=='Banner'?'banner': 'slider';
      data.need_image_upload = '1';
      data.need_image_upload_only = '1';
    }

    if(pageName=='Faq Item'){
      data.page_name = 'becomeapartner';
      data.need_image_upload = '0';
      data.section_name = 'faq_item'
      data.need_image_upload_only = '0';
    }

    return data;
  }

  deleteRow(event: any) {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.web.postData('contentDelete', event.data).then(res=>{
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

    let w = this.windowService.open(ContentsFormComponent, {
      title: `Edit Contents`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'edit'} ,
      windowClass: "formWindow",
    });

   this.webSubscription = w.onClose.subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  getPageData(page:string) {
    this.loading = true;
    this.web.getData('getWebsiteContents?section='+page).then(res=>{
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
    console.log(page);
    // if(page=='banner' || page =='slider'){
    //   delete this.tableSettings.columns.section_title;
    // }
    // this.tableSettings.actions.add = true;;
  }

  mappingTableData(val:any){
    this.tableSource = val;
    this.tableSourceTemp = JSON.parse(JSON.stringify(val));
    this.tableSource.map((x:any)=>{
      return x;
    })
  }


  pageNameCalculator(page:string){
    let a = page.split('_').map(x => (x.charAt(0).toUpperCase()+ x.slice(1))).join(' ');
    this.pageName = a;
    // this.pageName = ( page=='home')?'Home':(page=='trains')?'Traings':(page=='flights')?'Flights':(page=='parcels')?'Parcels':(page=='your_bookings')?'Your Bookings':(page=='who_we_are')?'Who We Are':(page=='terms')?'Terms of use':(page=='become_a_partner')?'Become a partner':'Privacy policy';
  }


  selectRow(event: any) {

    let w = this.windowService.open(ContentsFormComponent, {
      title: `View Content`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: event.data, action: 'view'} ,
      windowClass: "formWindow",
    });

   this.webSubscription = w.onClose.pipe().subscribe((res) => {
      console.log(res);
      //this.ngOnInit();
    });
  }


}
