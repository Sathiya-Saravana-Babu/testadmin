import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
     <b><a class="footer_link" [routerLink]="['/']" routerLinkActive="router-link-active">Easy Travel </a></b> &nbsp;2020
    </span>
    <div class="socials">

    </div>
  `,
})
export class FooterComponent {
}
