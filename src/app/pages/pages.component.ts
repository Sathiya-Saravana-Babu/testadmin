import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;

  constructor(private router: Router, private iconLibraries: NbIconLibraries){
    // this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
    //this.iconLibraries.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  ngOnInit(){
    let user = localStorage.getItem('travelAdminId');
    if(user==null || user ==''){
      this.router.navigate(['/login']);
    }
  }

}
