export default class UsersModel {
  public web_id:any;
  public user_name:string;
  public user_namelast:string;
  public user_register_type: string;
  public user_auth_token: string;
  public user_phone_no: string;
  public user_gender: string;
  public user_email: string;
  public user_dob: string;
  public user_id_auth: string;
  public user_address_1: string;
  public user_address_2: string;
  public user_zipcode: string;
  public user_city: string;
  public user_state: string;
  public user_country: any;
  public user_email_subscription: any;
  public user_active_status: any;
  public user_password:string;
  public action:string;
  public selectedCountry:any;
  public user_active_status_html:string;


  constructor(user:any = {}){

  this.web_id = user.web_id || '';
  this.user_name = user.user_name || '';
  this.user_namelast = user.user_namelast || '';
  this.user_register_type = user.user_register_type || '';
  this.user_auth_token = user.user_auth_token || '';
  this.user_phone_no = user.user_phone_no || '';
  this.user_gender = user.user_gender || '';
  this.user_email = user.user_email || '';
  this.user_dob = user.user_dob || '';
  this.user_id_auth = user.user_id_auth || '';
  this.user_address_1 = user.user_address_1 || '';
  this.user_address_2 = user.user_address_2 || '';
  this.user_zipcode = user.user_zipcode || '';
  this.user_city = user.user_city || '';
  this.user_state = user.user_state || '';
  this.user_country = user.user_country || '';
  this.user_email_subscription = user.user_email_subscription || '';
  this.user_active_status = user.user_active_status || '';
  this.user_password = user.user_password || '';
  this.action = user.action || '';
  this.selectedCountry = user.selectedCountry || {};
  this.user_active_status_html = user.user_active_status_html || {};

  }

}
