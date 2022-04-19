import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NbWindowService, NbWindowConfig } from "@nebular/theme";
import { CompaniesFormComponent } from "./companies-form/companies-form.component";
import CompaniesModel from './companies-form/companies-model';
import { environment } from '../../../environments/environment';
import { WebService } from '../../providers/web.service';
import { CommonService } from '../../providers/common.service';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class CompaniesComponent implements OnInit {
  //tableSettings:any;
  tableSource: CompaniesModel[];
  base_url: string = environment.base_url;
  loading:boolean;
  constructor(
    private windowService: NbWindowService,
    private web: WebService,
    private common: CommonService,
    private router: Router
  ) {}

  tableSettings: any = {
    attr: {
      class: 'company-table'
    },
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
      edit: false,
      delete: false,
        custom: [
        { name: 'viewrecord', title: '<i class="fa fa-eye"></i>' },
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>'},
        { name: 'deleterecord', title: '<i class="fa fa-trash"></i>'},
      ],
      position: "right",
    },
    sort: true,
    mode: "external",
    pager: {
      perPage: 15
    },
    columns: {
      vehicles_vehicle_name: {
        title: "Company Name",
        type: "string",
        //width: '300px',
      },
      vehicles_vehicle_type: {
        title: "Vehicle Type",
        type: "string",
        //width: '300px',
        valuePrepareFunction: (data:string)=>{
          return 'Bus';
        },
        filter: false
      },
      vehicles_vehicle_logo: {
        title: "Company logo",
        type: "html",
        valuePrepareFunction:(data:string)=>{
          return '<img class="company-logo" src="'+this.base_url+'uploads/companies/'+data+'" alt="EasyTravel">'
        },
        filter: false
      },
      vehicles_count: {
        title: 'Available Trips/day',
        type: 'string',
        valuePrepareFunction: (data:any)=>{
          if(data==0){
            return 'No Trips';
          }else if(data == 1){
            return '1 trip';
          }
          return data + ' trips';
        },
        filter: false
      }
    },
  };

  ngOnInit(): void {

    this.getPageData();
  }

  onCustomAction(event: any) {
    console.log(event);
    let action = event.action;
    if(action =='editrecord'){
        this.editRow(event);
      }

      if(action =='viewrecord'){
        // this.router.navigate(['/pages/companies/vehicles', event.data.web_id]);
        // this.common.setCompanyDetails(event.data);
        this.selectRow(event);
      }

      if(action =='deleterecord'){
        this.deleteRow(event);
    }
  }
  
  selectRow(event: any) {
    // let data = event.data
    // let w = this.windowService.open(CompaniesFormComponent, {
    //   title: `View Company`,
    //   hasBackdrop: true,
    //   closeOnBackdropClick: false,
    //   context:  {data: data, action: 'view'} ,
    //   windowClass: "formWindow",
    // });

    // w.onClose.pipe().subscribe((res) => {
    //   console.log(res);
    //   //this.ngOnInit();
    // });
    this.common.setCompanyDetails(event.data);
    this.router.navigate(['/pages/companies/vehicles', event.data.web_id]);
  }

  createRow() {
    let w = this.windowService.open(CompaniesFormComponent, {
      title: `Add Company`,
      hasBackdrop: true,
      closeOnBackdropClick: false,
      context:  {data: new CompaniesModel(), action: 'add'} ,
      windowClass: "formWindow",
    });

    w.onClose.pipe().subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  editRow(event: any) {

    let id = event.data.web_id;
    let data = event.data;

    let w = this.windowService.open(CompaniesFormComponent, {
      title: `Edit Company`,
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
    if (window.confirm('Are you sure you want to delete the company, this causes delete all the routes under this..?')) {
      this.loading = true;
      this.web.postData('deleteCompany', {web_id: event.data.web_id}).then(res=>{
        this.loading = false;
        if(res.status=='200'){
          this.common.presentToast(res.error, 'Success');
          this.ngOnInit();
        }else{
          this.common.presentToast(res.error, 'Warning');
          // this.common.showToast('danger', 'Error', res.error);
        }
      },err=>{
        this.loading = false;
        this.common.presentToast('Connection Error', 'Error');
        //this.common.showToast('danger', 'Error', 'Connection Error');
      })
    }

  }

  getPageData() {
    this.loading = true;
    this.web.getData('getCompanies').then(res=>{
      this.loading = false;
      if(res.status=='200'){
        //this.mappingTableData(res.data)
        this.tableSource = res.data;
      }else{
        this.common.presentToast(res.error, 'Failed');
      }
    },err=>{
      this.loading = false;

      this.common.presentToast('Connection Error', 'Failed');
    })
  }

  // mappingTableData(val:any){
  //   this.tableSource = val;
  //   this.tableSourceTemp = JSON.parse(JSON.stringify(val));
  // }



}
