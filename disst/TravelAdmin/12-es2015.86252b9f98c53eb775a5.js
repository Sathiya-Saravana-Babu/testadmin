(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{gecV:function(e,t,n){"use strict";n.r(t),n.d(t,"BookingsModule",(function(){return M}));var a=n("ofXK"),i=n("tyNb"),o=n("mrSG"),l=n("aceb"),r=n("fXoL");let d=(()=>{class e{constructor(){this.formData={}}setFormData(e){this.formData=e,console.log(this.getFormData())}getFormData(){return this.formData}currencyConverter(e){return"---"==e?"----":new Intl.NumberFormat("en-US",{style:"decimal",currency:"CFA",minimumFractionDigits:0}).format(e).split(",").join(" ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=n("AytR"),m=n("sAl5");function c(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item"),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Email"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"a",5),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275propertyInterpolate1"]("href","mailto:",e.dialogData.bookings_email,"",r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.dialogData.bookings_email," ")}}function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"h2",7),r["\u0275\u0275text"](2,"Return trip"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h6"),r["\u0275\u0275text"](5,"Travelling Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"](" ",e.dialogData.bookings_travel_return_date," ")}}function g(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Company Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275text"](5),r["\u0275\u0275element"](6,"img",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.dialogData.vehicles_vehicle_name_round," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("alt",e.dialogData.vehicles_vehicle_name_round)("src",e.base_url+"AppServer/newrestapi/application/uploads/images/"+e.dialogData.vehicles_vehicle_logo_round,r["\u0275\u0275sanitizeUrl"])}}function u(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Class"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.dialogData.class_name_round," ")}}function v(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Departure Time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.AMPMConverter(e.dialogData.routes_departure_time_round,"noneed")," ")}}function b(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Arrival Time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.AMPMConverter(e.dialogData.routes_arriving_time_round,"noneed")," ")}}function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Ticket Amount"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"div",12),r["\u0275\u0275elementStart"](6,"div",13),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"div",14),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",12),r["\u0275\u0275elementStart"](11,"div",13),r["\u0275\u0275text"](12," Commission Amount "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",14),r["\u0275\u0275text"](14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",12),r["\u0275\u0275elementStart"](16,"div",13),r["\u0275\u0275text"](17," Total "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"div",14),r["\u0275\u0275text"](19),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"]("Tickets (",e.passengerConverter(),")"),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("",e.currencyConverter(e.dialogData.bookings_amount)," Fcfa"),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.currencyConverter(e.dialogData.bookings_amount_commission)," Fcfa "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.currencyConverter(e.dialogData.bookings_amount-0+(e.dialogData.bookings_amount_commission-0))," Fcfa ")}}function _(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item"),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Payment Response"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"code"),r["\u0275\u0275elementStart"](6,"pre"),r["\u0275\u0275text"](7),r["\u0275\u0275pipe"](8,"json"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"]("              ",r["\u0275\u0275pipeBind1"](8,1,e.seperateStringintoJson(e.dialogData.webhook_response)),"\n            ")}}let S=(()=>{class e{constructor(e,t,n,a,i){this.windowRef=t,this.formService=n,this.common=a,this.bookingService=i,this.base_url=s.a.base_url,this.round_trip=!1,this.dialogData=e.data,this.dialogAction=e.action}AMPMConverter(e,t=""){let n=e.split(":"),a=n[0],i=n[1],o=" AM";return a>12&&(a-=12,o=" PM"),""==t?"<b>"+a+":"+i+"<span>"+o+"</span></b>":a+":"+i+o}closeWindow(){this.windowRef.close()}currencyConverter(e){return this.bookingService.currencyConverter(e)}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){console.log(this.dialogData),this.round_trip=null!=this.dialogData.class_name_round&&""!=this.dialogData.class_name_round}))}seperateStringintoJson(e){return JSON.parse(e)}timeStamptoDate(e){return new Date(1e3*e)}passengerConverter(){if(null==this.dialogData)return;let e=null==this.dialogData.class_name?"single":"round",t="single"==e?this.dialogData.routes_adult_price:this.dialogData.routes_adult_round_price,n="single"==e?this.dialogData.routes_infant_price:this.dialogData.routes_infant_round_price;return 1==this.dialogData.bookings_adult_count&&0==this.dialogData.bookings_infant_count?"1 Adult x "+t:this.dialogData.bookings_adult_count>1&&0==this.dialogData.bookings_infant_count?this.dialogData.bookings_adult_count+" Adults x "+t:0==this.dialogData.bookings_adult_count&&1==this.dialogData.bookings_infant_count?"1 Kid x "+n:0==this.dialogData.bookings_adult_count&&this.dialogData.bookings_infant_count>1?this.dialogData.bookings_adult_count+" Kids x "+n:this.dialogData.bookings_adult_count+" Adults x "+t+", "+this.dialogData.bookings_adult_count+" Kids x "+n}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.g),r["\u0275\u0275directiveInject"](l.wb),r["\u0275\u0275directiveInject"](d),r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](d))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-bookings-form"]],decls:79,vars:27,consts:[["accent","info"],[1,"dialog-list"],[1,"row"],[1,"title","col-4"],[1,"content","col-8"],[1,"color-unset",3,"href"],[4,"ngIf"],[1,"heading-trip"],[1,"pl-3","max-height-100",3,"alt","src"],["class","row",4,"ngIf"],["target","_blank",3,"href"],[1,"fa","fa-file-pdf","pdf-icon"],[1,"row","my-1"],[1,"col-7"],[1,"col-5"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nb-card",0),r["\u0275\u0275elementStart"](1,"nb-card-header"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"nb-card-body"),r["\u0275\u0275elementStart"](4,"nb-list",1),r["\u0275\u0275elementStart"](5,"nb-list-item",2),r["\u0275\u0275elementStart"](6,"div",3),r["\u0275\u0275elementStart"](7,"h6"),r["\u0275\u0275text"](8,"Passengers"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",4),r["\u0275\u0275text"](10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"nb-list-item",2),r["\u0275\u0275elementStart"](12,"div",3),r["\u0275\u0275elementStart"](13,"h6"),r["\u0275\u0275text"](14,"Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",4),r["\u0275\u0275text"](16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"nb-list-item",2),r["\u0275\u0275elementStart"](18,"div",3),r["\u0275\u0275elementStart"](19,"h6"),r["\u0275\u0275text"](20,"Phone"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",4),r["\u0275\u0275elementStart"](22,"a",5),r["\u0275\u0275text"](23),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](24,c,7,2,"nb-list-item",6),r["\u0275\u0275elementStart"](25,"nb-list-item",2),r["\u0275\u0275elementStart"](26,"h2",7),r["\u0275\u0275text"](27,"Outgoing trip"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"div",3),r["\u0275\u0275elementStart"](29,"h6"),r["\u0275\u0275text"](30,"Travelling Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"div",4),r["\u0275\u0275text"](32),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](33,"nb-list-item",2),r["\u0275\u0275elementStart"](34,"div",3),r["\u0275\u0275elementStart"](35,"h6"),r["\u0275\u0275text"](36,"Company Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](37,"div",4),r["\u0275\u0275text"](38),r["\u0275\u0275element"](39,"img",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](40,"nb-list-item",2),r["\u0275\u0275elementStart"](41,"div",3),r["\u0275\u0275elementStart"](42,"h6"),r["\u0275\u0275text"](43,"Class"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](44,"div",4),r["\u0275\u0275text"](45),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](46,"nb-list-item",2),r["\u0275\u0275elementStart"](47,"div",3),r["\u0275\u0275elementStart"](48,"h6"),r["\u0275\u0275text"](49,"Departure Time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"div",4),r["\u0275\u0275text"](51),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](52,"nb-list-item",2),r["\u0275\u0275elementStart"](53,"div",3),r["\u0275\u0275elementStart"](54,"h6"),r["\u0275\u0275text"](55,"Arrival Time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](56,"div",4),r["\u0275\u0275text"](57),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](58,p,8,1,"nb-list-item",9),r["\u0275\u0275template"](59,g,7,3,"nb-list-item",9),r["\u0275\u0275template"](60,u,6,1,"nb-list-item",9),r["\u0275\u0275template"](61,v,6,1,"nb-list-item",9),r["\u0275\u0275template"](62,b,6,1,"nb-list-item",9),r["\u0275\u0275elementStart"](63,"nb-list-item",2),r["\u0275\u0275elementStart"](64,"div",3),r["\u0275\u0275elementStart"](65,"h6"),r["\u0275\u0275text"](66,"Ticket"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](67,"div",4),r["\u0275\u0275elementStart"](68,"a",10),r["\u0275\u0275element"](69,"i",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](70,h,20,4,"nb-list-item",9),r["\u0275\u0275template"](71,_,9,3,"nb-list-item",6),r["\u0275\u0275elementStart"](72,"nb-list-item",2),r["\u0275\u0275elementStart"](73,"div",3),r["\u0275\u0275elementStart"](74,"h6"),r["\u0275\u0275text"](75,"Booked time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](76,"div",4),r["\u0275\u0275text"](77),r["\u0275\u0275pipe"](78,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate3"]("",t.dialogData.bookings_starting_point," to ",t.dialogData.bookings_ending_point," (",null!=t.dialogData.routes_arriving_time_round?"Round Trip":"Single Trip",")"),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"](" (",(t.dialogData.bookings_adult_count>0?1==t.dialogData.bookings_adult_count?"1 Adult, ":t.dialogData.bookings_adult_count+" Adults, ":"")+(t.dialogData.bookings_infant_count>0?1==t.dialogData.bookings_infant_count?"1 Kid":t.dialogData.bookings_infant_count+" kids":""),") "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",t.dialogData.bookings_username," "),r["\u0275\u0275advance"](6),r["\u0275\u0275propertyInterpolate1"]("href","tel:",t.dialogData.bookings_phone,"",r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](t.dialogData.bookings_phone),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogData.bookings_email),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"](" ",t.dialogData.bookings_travel_date," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",t.dialogData.vehicles_vehicle_name," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("alt",t.dialogData.vehicles_vehicle_name)("src",t.base_url+"AppServer/newrestapi/application/uploads/images/"+t.dialogData.vehicles_vehicle_logo,r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",t.dialogData.class_name," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",t.AMPMConverter(t.dialogData.routes_departure_time,"noneed")," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",t.AMPMConverter(t.dialogData.routes_arriving_time,"noneed")," "),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.round_trip),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.round_trip),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.round_trip),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.round_trip),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.round_trip),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("href",t.base_url+"uploads/tickets/EasyTravel_"+t.dialogData.bookings_invoice_link,r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.dialogData.bookings_amount),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!1),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind2"](78,24,t.timeStamptoDate(t.dialogData.bookings_time),"medium")," "))},directives:[l.s,l.u,l.r,l.R,l.S,a.NgIf],pipes:[a.DatePipe,a.JsonPipe],styles:["nb-list-item .title h6{font-weight:600;margin:unset}nb-list-item .content pre{background:#efeaea;display:block}nb-card-body{max-height:80vh;overflow:scroll;min-width:700px}.pdf-icon{font-size:3rem;background:#efeaea;padding:30px}.max-height-100{max-height:100px}.color-unset{color:unset!important}.dialog-list{overflow:unset!important}.heading-trip{min-width:100%;display:block;color:#0095ff!important;margin-bottom:23px;font-size:25px!important;background:#f1f1f1;padding:10px;border-top:2px solid}"],encapsulation:2}),e})();var f=n("PFrW"),x=n("jhN1");function y(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",4),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"MTN Payment service is not available for now."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Payment Type"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.dialogDataPaymentType," ")}}function D(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Amount"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.currencyConverter(e.dialogDataPayment.pay_amount)," Fcfa ")}}function k(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Payment ID"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.dialogDataPayment.pay_transaction," ")}}function w(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Receipt"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275elementStart"](5,"a",7),r["\u0275\u0275text"](6,"Receipt"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("href",e.dialogDataPayment.pay_receipt,r["\u0275\u0275sanitizeUrl"])}}function I(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Payment Status"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",e.dialogDataPayment.pay_status," ")}}function C(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-list-item",3),r["\u0275\u0275elementStart"](1,"div",5),r["\u0275\u0275elementStart"](2,"h6"),r["\u0275\u0275text"](3,"Payment time"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",6),r["\u0275\u0275text"](5),r["\u0275\u0275pipe"](6,"date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind2"](6,1,e.timeStamptoDate(e.dialogDataPayment.pay_time),"medium")," ")}}let P=(()=>{class e{constructor(e,t,n,a){this.windowRef=t,this.common=n,this.sanitizer=a,this.base_url=s.a.base_url,this.dialogDataPayment={},this.dialogData=e.data,this.dialogAction=e.action,this.sanitize=this.sanitizer}closeWindow(){this.windowRef.close()}currencyConverter(e){return"---"==e?"----":new Intl.NumberFormat("en-US",{style:"decimal",currency:"CFA",minimumFractionDigits:0}).format(e).split(",").join(" ")}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){if(this.dialogDataPaymentType="card_payment"==this.dialogData.webhook_type?"Stripe":"MTN Pay","Stripe"==this.dialogDataPaymentType){let e=JSON.parse(this.dialogData.webhook_response);this.dialogDataPayment.pay_amount=e.amount,this.dialogDataPayment.pay_transaction=e.id,this.dialogDataPayment.pay_time=e.created,this.dialogDataPayment.pay_receipt=e.receipt_url,this.dialogDataPayment.pay_status=e.status,this.url=this.sanitizer.bypassSecurityTrustUrl(this.dialogDataPayment.pay_receipt),console.log(this.dialogDataPayment)}else this.dialogDataPayment={}}))}seperateStringintoJson(e){return JSON.parse(e)}timeStamptoDate(e){return new Date(1e3*e)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.g),r["\u0275\u0275directiveInject"](l.wb),r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](x.b))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-bookings-form"]],decls:12,vars:8,consts:[["accent","info"],[1,"dialog-list"],["class","row",4,"ngIf"],[1,"row"],[1,"title","col-10"],[1,"title","col-4"],[1,"content","col-8"],["target","_blank",1,"text-muted",3,"href"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nb-card",0),r["\u0275\u0275elementStart"](1,"nb-card-header"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"nb-card-body"),r["\u0275\u0275elementStart"](4,"nb-list",1),r["\u0275\u0275template"](5,y,4,0,"nb-list-item",2),r["\u0275\u0275template"](6,E,6,1,"nb-list-item",2),r["\u0275\u0275template"](7,D,6,1,"nb-list-item",2),r["\u0275\u0275template"](8,k,6,1,"nb-list-item",2),r["\u0275\u0275template"](9,w,7,1,"nb-list-item",2),r["\u0275\u0275template"](10,I,6,1,"nb-list-item",2),r["\u0275\u0275template"](11,C,7,4,"nb-list-item",2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" Payment - ",t.dialogData.bookings_username,""),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","Stripe"!=t.dialogDataPaymentType),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPaymentType),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPayment.pay_amount),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPayment.pay_transaction),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPayment.pay_receipt),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPayment.pay_status),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.dialogDataPayment.pay_time))},directives:[l.s,l.u,l.r,l.R,a.NgIf,l.S],pipes:[a.DatePipe],styles:["nb-list-item .title h6{font-weight:600;margin:unset}nb-list-item .content pre{background:#efeaea;display:block}nb-card-body{max-height:80vh;overflow:scroll;min-width:700px}.pdf-icon{font-size:3rem;background:#efeaea;padding:30px}.max-height-100{max-height:100px}.color-unset{color:unset!important}.dialog-list{overflow:unset!important}.heading-trip{min-width:100%;display:block;color:#0095ff!important;margin-bottom:23px;font-size:25px!important;background:#f1f1f1;padding:10px;border-top:2px solid}"],encapsulation:2}),e})();var T=n("RS3s");const A=[{path:":vehicle",component:(()=>{class e{constructor(e,t,n,a,i,o){this.windowService=e,this.formService=t,this.web=n,this.common=a,this.datePipe=i,this.activeRoute=o,this.base_url=s.a.base_url,this.tableAmount={},this.loading=!1,this.tableSettings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="fa fa-eye"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="fa fa-ticket-alt text-secondary"></i>'},actions:{columnTitle:"ACTIONS",add:!1,edit:!0,delete:!0,position:"right"},sort:!0,mode:"external",pager:{perPage:15},columns:{vehicles_vehicle_type:{title:"CATEGORY",type:"string",width:"20px"},vehicles_vehicle_name:{title:"TRANSPORTER",type:"string"},bookings_starting_point:{title:"FROM",type:"string"},bookings_ending_point:{title:"TO",type:"string"},bookings_travel_date:{title:"DATE",type:"html"},webhook_type:{title:"PAYMENT METHOD",type:"string",valuePrepareFunction:e=>"card_payment"==e?"CARD":"MTN PAY"},bookings_amount:{title:"TICKET AMOUNT",type:"string",valuePrepareFunction:e=>this.currencyConverter(e)},bookings_amount_commission:{title:"COMMISSIONS",type:"string",valuePrepareFunction:e=>this.currencyConverter(e)}}}}ngOnInit(){this.activeRoute.paramMap.subscribe(e=>{console.log(e),e.has("vehicle")&&this.getPageData(e.params.vehicle)})}onCustomAction(e){console.log(e)}selectRow(e){this.windowService.open(S,{title:"View Bookings",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:e.data,action:"view"},windowClass:"formWindow"}).onClose.pipe().subscribe(e=>{console.log(e),this.ngOnInit()})}createRow(){}currencyConverter(e){return this.formService.currencyConverter(e)}deleteRow(e){this.windowService.open(P,{title:"View Payment",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:e.data,action:"payment"},windowClass:"formWindow"}).onClose.pipe().subscribe(e=>{console.log(e)})}editRow(e){this.windowService.open(S,{title:"View Bookings",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:e.data,action:"view"},windowClass:"formWindow"}).onClose.pipe().subscribe(e=>{console.log(e),this.ngOnInit()})}getPageData(e){this.loading=!0,this.web.getData("getBookingsInfo?vehicle="+e).then(e=>{this.loading=!1,"200"==e.status?(this.mappingTableData(e.data),this.tableAmount=e.amount):this.common.presentToast(e.error,"Error")},e=>{this.loading=!1,this.common.presentToast("Connection Error","Error")})}mappingTableData(e){this.tableSource=e.filter(e=>null!=e.bookings_starting_point),this.tableSource.map(e=>{let t=e.bookings_travel_date;if(t=this.datePipe.transform(t),e.bookings_travel_date=t,e.bookings_travel_return_date){let t=e.bookings_travel_return_date;t=this.datePipe.transform(t),e.bookings_travel_return_date=t}return e.vehicles_vehicle_type="flight"==e.vehicles_vehicle_type?"Airline":"bus"==e.vehicles_vehicle_type?"Bus":"Train",e.bookings_username=e.bookings_username||"----",e.bookings_passengers=this.passengerConverter({adults:e.bookings_adult_count,kids:e.bookings_infant_count}),e})}passengerConverter(e){return 1==e.adults&&0==e.kids?"1 Adult":e.adults>1&&0==e.kids?e.adults+" Adults":parseInt(e.adults)+parseInt(e.kids)+" Passengers"}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.xb),r["\u0275\u0275directiveInject"](d),r["\u0275\u0275directiveInject"](f.a),r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](a.DatePipe),r["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-bookings"]],decls:16,vars:8,consts:[[3,"settings","source","userRowSelect","create","edit","delete"],[1,"row"],[1,"col-4"],["status","primary","accent","info",3,"nbSpinner"],["status","warning","accent","info",3,"nbSpinner"],["status","success","accent","info",3,"nbSpinner"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nb-card"),r["\u0275\u0275elementStart"](1,"nb-card-header"),r["\u0275\u0275text"](2," Manage Bookings "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"nb-card-body"),r["\u0275\u0275elementStart"](4,"ng2-smart-table",0),r["\u0275\u0275listener"]("userRowSelect",(function(e){return t.selectRow(e)}))("create",(function(){return t.createRow()}))("edit",(function(e){return t.editRow(e)}))("delete",(function(e){return t.deleteRow(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"nb-card-footer"),r["\u0275\u0275elementStart"](6,"div",1),r["\u0275\u0275elementStart"](7,"div",2),r["\u0275\u0275elementStart"](8,"nb-alert",3),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",2),r["\u0275\u0275elementStart"](11,"nb-alert",4),r["\u0275\u0275text"](12),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",2),r["\u0275\u0275elementStart"](14,"nb-alert",5),r["\u0275\u0275text"](15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("settings",t.tableSettings)("source",t.tableSource),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("nbSpinner",t.loading),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("Total Tickets: ",t.currencyConverter(t.tableAmount.amount)," Fcfa "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("nbSpinner",t.loading),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("Total Commission: ",t.currencyConverter(t.tableAmount.commission)," Fcfa"),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("nbSpinner",t.loading),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("Total Sales: ",t.currencyConverter(t.tableAmount.amount-0+(t.tableAmount.commission-0))," Fcfa"))},directives:[l.s,l.u,l.r,T.a,l.t,l.k,l.kb],styles:[".nb-theme-default ng2-smart-table .ng2-smart-actions a.ng2-smart-action{font-size:1.3rem!important}.nb-theme-default nb-alert.accent-info{border-top:none}"],encapsulation:2}),e})()}];let R=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(A)],i.g]}),e})(),M=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[d,a.DatePipe],imports:[[a.CommonModule,R,l.v,l.T,T.b,l.vb.forChild(),l.l,l.lb]]}),e})()}}]);