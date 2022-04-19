export default class VehiclesModel {
  public web_id:any;
  public route_id:any;
  public action:string;
  public vehicles_vehicle_name:string;

  public vehicles_vehicle_type: string;
  public vehicles_serial_no: string;
  public vehicles_vehicle_logo: string;
  public starting_point: number;
  public ending_point: number;
  public routes_departure_time: string;
  public routes_arriving_time: string;
  public routes_departure_time_round: string;
  public routes_arriving_time_round: string;
  public class_name: string;
  public routes_vehicle_id:number;
  public routes_starting_point : string
  public routes_ending_point : string
  public routes_stop_points : string
  public routes_distance : string
  public routes_adult_present : string
  public routes_infant_present : string
  public routes_adult_price : number
  public routes_adult_round_price : number
  public routes_infant_price : number
  public routes_infant_round_price : number
  public routes_departure_status : number
  public routes_mon_availability : number
  public routes_tue_availability : number
  public routes_wed_availability : number
  public routes_thu_availability : number
  public routes_fri_availability : number
  public routes_sat_availability : number
  public routes_sun_availability : number
  public routes_with_envelope : string
  public routes_with_small_box : string
  public routes_with_medium_box : string
  public routes_with_large_box : string
  public routes_with_xlarge_box : string
  public routes_travel_type : number
  public class_vehicle_type : number
  public class_description : string

  constructor(vehicle:any = {}){

    this.web_id = vehicle.web_id || '';
    this.route_id = vehicle.route_id || '';
    this.routes_vehicle_id = vehicle.routes_vehicle_id || '';
    this.action = vehicle.action || '';
    this.vehicles_vehicle_type = vehicle.vehicles_vehicle_type || '';
    this.vehicles_serial_no = vehicle.vehicles_serial_no || '';
    this.vehicles_vehicle_logo = vehicle.vehicles_vehicle_logo || '';
    this.starting_point = vehicle.starting_point || '';
    this.ending_point = vehicle.ending_point || '';
    this.routes_departure_time = vehicle.routes_departure_time || '';
    this.routes_arriving_time = vehicle.routes_arriving_time || '';
    this.routes_departure_time_round = vehicle.routes_departure_time_round || '';
    this.routes_arriving_time_round = vehicle.routes_arriving_time_round || '';
    this.class_name = vehicle.class_name || '';
    this.routes_starting_point = vehicle.routes_starting_point || '';
    this.routes_ending_point = vehicle.routes_ending_point || '';
    this.routes_stop_points = vehicle.routes_stop_points || '';
    this.routes_distance = vehicle.routes_distance || '';
    this.routes_adult_present = vehicle.routes_adult_present || '';
    this.routes_infant_present = vehicle.routes_infant_present || '';
    this.routes_adult_price = vehicle.routes_adult_price || '';
    this.routes_adult_round_price = vehicle.routes_adult_round_price || '';
    this.routes_infant_price = vehicle.routes_infant_price || '';
    this.routes_infant_round_price = vehicle.routes_infant_round_price || '';
    this.routes_departure_status = vehicle.routes_departure_status || '';
    this.routes_mon_availability = vehicle.routes_mon_availability || '';
    this.routes_tue_availability = vehicle.routes_tue_availability || '';
    this.routes_wed_availability = vehicle.routes_wed_availability || '';
    this.routes_thu_availability = vehicle.routes_thu_availability || '';
    this.routes_fri_availability = vehicle.routes_fri_availability || '';
    this.routes_sat_availability = vehicle.routes_sat_availability || '';
    this.routes_sun_availability = vehicle.routes_sun_availability || '';
    this.routes_with_envelope = vehicle.routes_with_envelope || '';
    this.routes_with_small_box = vehicle.routes_with_small_box || '';
    this.routes_with_medium_box = vehicle.routes_with_medium_box || '';
    this.routes_with_large_box = vehicle.routes_with_large_box || '';
    this.routes_with_xlarge_box = vehicle.routes_with_xlarge_box || '';
    this.routes_travel_type = vehicle.routes_travel_type || '';
    this.class_vehicle_type = vehicle.class_vehicle_type || '';
    this.class_description = vehicle.class_description || '';

  }

}
