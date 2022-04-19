export default class CompaniesModel {
  public web_id: any;
  public action: string;
  public vehicles_vehicle_name: string;
  public vehicles_vehicle_type: string;
  public vehicles_vehicle_logo: string;
  public vehicles_serial_no: string;

  // new data
  public vehicles_vehicle_email: string;
  public vehicles_vehicle_address: string;
  public vehicles_vehicle_phone: string;
  public vehicles_vehicle_password:any;
  public selectedCountry:any;
  

  constructor(company: any = {}) {
    this.web_id  = company.web_id || '';
    this.action = company.action || '';
    this.vehicles_vehicle_name = company.vehicles_vehicle_name || '';
    this.vehicles_vehicle_type = company.vehicles_vehicle_type || '';
    this.vehicles_vehicle_logo = company.vehicles_vehicle_logo || '';
    this.vehicles_serial_no = company.vehicles_serial_no || '';

    // new data
    this.vehicles_vehicle_email = company.vehicles_vehicle_email || '';
    this.vehicles_vehicle_address = company.vehicles_vehicle_address || '';
    this.vehicles_vehicle_phone = company.vehicles_vehicle_phone || '';
    this.vehicles_vehicle_password = company.vehicles_vehicle_password || '';
    this.selectedCountry = company.selectedCountry || {};
  }
}
