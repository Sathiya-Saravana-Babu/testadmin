import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../providers/common.service';
import { Router } from '@angular/router';
import { WebService } from '../../providers/web.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user:any = {};
  showMessages:any = {};
  submissionStatus:boolean = false;
  constructor(private common: CommonService, private router: Router, private web: WebService) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  submitForm(){
    console.log(this.user);
    if(this.user.username==null || this.user.username==''){
      this.common.presentToast('Please enter username');
      document.getElementById('username').focus();
    } else if(this.user.password==null || this.user.password==''){
      this.common.presentToast('Please enter password');
      document.getElementById('password').focus();
    } else {
      this.submissionStatus = true;
      this.web.postData('adminLogin', this.user).then(res=>{
        this.submissionStatus = false;
        console.log(res);
        if(res.status=='200'){
          localStorage.setItem('travelAdminId', res.data.web_id);
          this.common.presentToast('Successfully logged in', 'Success');
          this.router.navigate(['/pages']);
        }else{
          this.common.presentToast(res.error, 'Error');
        }
      },err=>{
        this.submissionStatus = false;
        this.common.presentToast('Connection Error', 'Error');
      });
    }
  }

  checkLoggedIn(){
    let user = localStorage.getItem('travelAdminId');
    if(user!=null && user !=''){
      this.router.navigate(['/pages']);
    }
  }
}
