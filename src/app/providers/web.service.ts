import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  uri:string = environment.base_url+'AppServer/newrestapi/index.php/webadmin/';
  constructor(private _httpClient: HttpClient) { }

    /**
   * Universal get
   *
   * @returns {Promise<any>}
   */
  getData(controller:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${this.uri}/`+controller, {
        headers:
            new HttpHeaders(
                {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            )
      }).subscribe((response: any) => {
        resolve(response);
        setTimeout(() => {

        }, 100);
      }, reject);
    });
  }

   /**
   * Universal post
   * @param params
   */

  postData(controller:any, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${this.uri}`+controller, {...data}, {
        headers:
            new HttpHeaders(
                {
                  'Content-Type': 'application/x-www-form-urlencoded',
                }
            )
      })
          .subscribe((response: any) => {
            resolve(response);
          }, reject);
    });
  }


  getIpInfo(controller:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`http://constructionmarket.info/zerosoftzst/gatherup/newrestapi/webservices/ip_info`+controller, {
        headers:
            new HttpHeaders(
                {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            )
      }).subscribe((response: any) => {
        resolve(response);
        setTimeout(() => {

        }, 100);
      }, reject);
    });
  }

  sendNotificationRegister(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`http://constructionmarket.info/zerosoftzst/easytravel/AppServer/sms_twilio.php`, {...data}, {
        headers:
            new HttpHeaders(
                {
                  'Content-Type': 'application/x-www-form-urlencoded',
                }
            )
      })
          .subscribe((response: any) => {
            console.log(response, 'email')
            resolve(response);
          }, reject);
    });
  }


  uploadWebsitePicture(uploadurl:any, body:any) {
    const url = uploadurl;
    const response = this._httpClient.post(url, body);
    return response;
   }

}
