!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5uzx":function(t,a,i){"use strict";i.r(a),i.d(a,"ContentsModule",(function(){return G}));var o,r=i("ofXK"),l=i("tyNb"),s=i("mrSG"),c=i("aceb"),d=i("sAl5"),m=i("fXoL"),p=((o=function(){function t(n){e(this,t),this.common=n,this.formData={}}return n(t,[{key:"setFormData",value:function(e){this.formData=e,console.log(this.getFormData())}},{key:"getFormData",value:function(){return this.formData}},{key:"contentsFormValidation",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.section_name,a=e.page_name,"slider"!=n){t.next=3;break}return t.abrupt("return",null==e.page_name||""==e.page_name?(this.common.presentToast("Please choose the page","Error"),!1):""!=e.section_image&&null!=e.section_image||(this.common.presentToast("Please choose image","Error"),!1));case 3:if("banner"!=n){t.next=5;break}return t.abrupt("return",null!=e.section_image&&""!=e.section_image||(this.common.presentToast("Please choose the image","Error"),!1));case 5:if("social_link"!=n){t.next=8;break}return i=/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,t.abrupt("return",null==e.section_content||""==e.section_content?(this.common.presentToast("Enter address url","Error"),!1):0!=i.test(e.section_content)||(this.common.presentToast("Enter valid address url.","Error"),!1));case 8:return t.abrupt("return",!("contactus"!=a&&"faq_item"!=n||(null==e.section_title||""==e.section_title?(this.common.presentToast("Enter section title","Error"),1):null==e.section_title_fr||""==e.section_title_fr?(this.common.presentToast("Enter section title for francaise","Error"),1):null==e.section_content||""==e.section_content?(this.common.presentToast("Enter section content","Error"),1):(null==e.section_content_fr||""==e.section_content_fr)&&(this.common.presentToast("Enter section content for francaise","Error"),1))));case 9:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(e){return new(e||o)(m["\u0275\u0275inject"](d.a))},o.\u0275prov=m["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac,providedIn:"root"}),o),u=i("AytR"),g=i("PFrW"),f=(i("vQDl"),i("lb/0"),i("3Pt+"));function v(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section title"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"](" ",n.dialogData.section_title," ")}}function b(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section title - FR"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"](" ",n.dialogData.section_title_fr," ")}}function h(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section content"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"div",10),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("innerHTML",n.dialogData.section_content,m["\u0275\u0275sanitizeHtml"])}}function _(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section content - FR"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"div",10),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("innerHTML",n.dialogData.section_content_fr,m["\u0275\u0275sanitizeHtml"])}}function x(e,t){if(1&e&&m["\u0275\u0275element"](0,"img",13),2&e){var n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275property"]("src",n.base_url+"uploads/sliders/"+n.dialogData.section_image,m["\u0275\u0275sanitizeUrl"])}}function S(e,t){if(1&e&&m["\u0275\u0275element"](0,"img",13),2&e){var n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275property"]("src",n.base_url+"uploads/banners/"+n.dialogData.section_image,m["\u0275\u0275sanitizeUrl"])}}function E(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section Image"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",11),m["\u0275\u0275template"](5,x,1,1,"img",12),m["\u0275\u0275template"](6,S,1,1,"img",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf","slider"==n.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","banner"==n.dialogData.section_name)}}function w(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list",5),m["\u0275\u0275elementStart"](1,"nb-list-item",6),m["\u0275\u0275elementStart"](2,"div",7),m["\u0275\u0275elementStart"](3,"h6"),m["\u0275\u0275text"](4,"Page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"div",8),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"nb-list-item",6),m["\u0275\u0275elementStart"](8,"div",7),m["\u0275\u0275elementStart"](9,"h6"),m["\u0275\u0275text"](10,"Section name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"div",8),m["\u0275\u0275text"](12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](13,v,6,1,"nb-list-item",9),m["\u0275\u0275template"](14,b,6,1,"nb-list-item",9),m["\u0275\u0275template"](15,h,5,1,"nb-list-item",9),m["\u0275\u0275template"](16,_,5,1,"nb-list-item",9),m["\u0275\u0275template"](17,E,7,2,"nb-list-item",9),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"](" ",n.dialogData.page_name," "),m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"](" ",n.pageNameTranslator(n.dialogData.section_name)," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.dialogData.section_title&&n.dialogData.section_title),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only&&n.dialogData.section_title_fr),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only&&n.dialogData.section_content),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only&&n.dialogData.section_content_fr),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"==n.dialogData.need_image_upload)}}function y(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",15),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.page_name=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.page_name)}}function C(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",16),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.section_name=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.section_name)}}function D(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section title"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",17),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.section_title=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("disabled","social_link"==a.dialogData.section_name)("ngModel",a.dialogData.section_title)}}function I(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section title - FR"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",18),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.section_title_fr=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.section_title_fr)}}function k(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section content"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",19),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.section_content=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.section_content)}}function T(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section content - FR"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",20),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.section_content_fr=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.section_content_fr)}}function M(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Choose page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"nb-select",21),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).dialogData.page_name=e})),m["\u0275\u0275elementStart"](6,"nb-option",22),m["\u0275\u0275text"](7,"Home page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"nb-option",23),m["\u0275\u0275text"](9,"Trains Page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"nb-option",24),m["\u0275\u0275text"](11,"Buses Page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"nb-option",25),m["\u0275\u0275text"](13,"Flights Page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"nb-option",26),m["\u0275\u0275text"](15,"Parcels page"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngModel",a.dialogData.page_name)}}function R(e,t){if(1&e&&m["\u0275\u0275element"](0,"img",13),2&e){var n=m["\u0275\u0275nextContext"](4);m["\u0275\u0275property"]("src",n.base_url+"uploads/sliders/"+n.dialogData.section_image,m["\u0275\u0275sanitizeUrl"])}}function F(e,t){if(1&e&&m["\u0275\u0275element"](0,"img",13),2&e){var n=m["\u0275\u0275nextContext"](4);m["\u0275\u0275property"]("src",n.base_url+"uploads/banners/"+n.dialogData.section_image,m["\u0275\u0275sanitizeUrl"])}}function V(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",31),m["\u0275\u0275template"](1,R,1,1,"img",12),m["\u0275\u0275template"](2,F,1,1,"img",12),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","slider"==n.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","banner"==n.dialogData.section_name)}}function A(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",32),m["\u0275\u0275text"](1,"The image dimension should be, (390px, 260px)"),m["\u0275\u0275elementEnd"]())}function P(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",32),m["\u0275\u0275text"](1,"The image dimension should be, (2000, 516px)"),m["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-list-item",6),m["\u0275\u0275elementStart"](1,"div",7),m["\u0275\u0275elementStart"](2,"h6"),m["\u0275\u0275text"](3,"Section Image"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",8),m["\u0275\u0275elementStart"](5,"input",27),m["\u0275\u0275listener"]("change",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).onFileChange(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,V,3,2,"div",28),m["\u0275\u0275elementStart"](7,"div",29),m["\u0275\u0275template"](8,A,2,0,"span",30),m["\u0275\u0275template"](9,P,2,0,"span",30),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("ngIf",a.dialogData.section_image),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf","slider"==a.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","banner"==a.dialogData.section_name)}}function N(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-list",14),m["\u0275\u0275template"](1,y,6,1,"nb-list-item",9),m["\u0275\u0275template"](2,C,6,1,"nb-list-item",9),m["\u0275\u0275template"](3,D,6,2,"nb-list-item",9),m["\u0275\u0275template"](4,I,6,1,"nb-list-item",9),m["\u0275\u0275template"](5,k,6,1,"nb-list-item",9),m["\u0275\u0275template"](6,T,6,1,"nb-list-item",9),m["\u0275\u0275template"](7,M,16,1,"nb-list-item",9),m["\u0275\u0275template"](8,j,10,3,"nb-list-item",9),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only&&"social_link"!=n.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","1"!=n.dialogData.need_image_upload_only&&"social_link"!=n.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","slider"==n.dialogData.section_name),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","banner"==n.dialogData.section_name||"slider"==n.dialogData.section_name)}}function O(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",37),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"](2).deleteItem()})),m["\u0275\u0275text"](1,"Delete"),m["\u0275\u0275elementEnd"]()}}function W(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-card-footer"),m["\u0275\u0275elementStart"](1,"div",33),m["\u0275\u0275elementStart"](2,"button",34),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().closeWindow()})),m["\u0275\u0275text"](3,"Cancel"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,O,2,0,"button",35),m["\u0275\u0275elementStart"](5,"button",36),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().submitFormResults()})),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("disabled",a.loading),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",("faq_item"==a.dialogData.section_name||"slider"==a.dialogData.section_name)&&"add"!=a.dialogAction),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("disabled",a.loading),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"]("edit"==a.dialogAction?"Update":"Add")}}var B,z=((B=function(){function t(n,a,i,o,r){e(this,t),this.windowRef=a,this.formService=i,this.common=o,this.web=r,this.base_url=u.a.base_url,this.loading=!1,this.dialogData=n.data,this.dialogAction=n.action,this.dialogData.action=n.action}return n(t,[{key:"closeWindow",value:function(){this.windowRef.close()}},{key:"deleteItem",value:function(){var e=this;window.confirm("Are you sure to delete an item..?")&&(this.loading=!0,this.web.postData("deleteWebsiteContent",{id:this.dialogData.web_id}).then((function(t){e.loading=!1,"200"==t.status?(e.common.presentToast(t.error,"Success"),e.closeWindow()):e.common.presentToast(t.error,"Error")}),(function(t){e.loading=!1,console.log(t),e.common.presentToast("Connection Error","Error")})))}},{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.dialogData);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onFileChange",value:function(e){e.target.files.length>0&&this.onSubmit(e.target.files)}},{key:"onSubmit",value:function(e){var t=this,n=(new Date).valueOf(),a=e[0].name;a=a.substring(a.lastIndexOf(".")+1,a.length)||a;var i="EasyTravel_"+n.toString().substring(4,8)+e[0].name,o=new FormData;o.append("image",e[0]),o.append("image",i),o.append("profile_image",i),console.log(i),this.loading=!0,this.web.uploadWebsitePicture(this.base_url+"AppServer/upload_website_image.php?section="+this.dialogData.section_name+"&filename="+i,o).subscribe((function(e){t.loading=!1,console.log(e),"200"==e.status?(t.common.presentToast(e.error,"Success"),t.dialogData.section_image=i):t.common.presentToast(e.error,"Error")}),(function(e){t.loading=!1,t.common.presentToast("Connection Error","Error")}))}},{key:"pageNameTranslator",value:function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}},{key:"submitFormResults",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.formService.contentsFormValidation(this.dialogData);case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}this.loading=!0,this.web.postData("updateOtherContent",this.dialogData).then((function(e){t.loading=!1,"200"==e.status?(t.closeWindow(),t.common.presentToast(e.error,"Success")):t.common.presentToast(e.error,"Error")}),(function(e){t.loading=!1,console.log(e,"Error"),t.common.presentToast("Connection Error.","Error")}));case 5:case"end":return e.stop()}}),e,this)})))}}]),t}()).\u0275fac=function(e){return new(e||B)(m["\u0275\u0275directiveInject"](c.g),m["\u0275\u0275directiveInject"](c.wb),m["\u0275\u0275directiveInject"](p),m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](g.a))},B.\u0275cmp=m["\u0275\u0275defineComponent"]({type:B,selectors:[["ngx-contents-form"]],decls:5,vars:4,consts:[["accent","info"],["nbSpinnerStatus","danger",3,"nbSpinner"],["class","dialog-list",4,"ngIf"],["class","dialog-list content",4,"ngIf"],[4,"ngIf"],[1,"dialog-list"],[1,"row"],[1,"title","col-4"],[1,"content","col-8"],["class","row",4,"ngIf"],[1,"content","col-8",3,"innerHTML"],[1,"content","col-8","section_image"],["alt","EasyTravel",3,"src",4,"ngIf"],["alt","EasyTravel",3,"src"],[1,"dialog-list","content"],["type","text","id","section_content","disabled","","nbInput","","fullWidth","","status","basic","placeholder","Title",3,"ngModel","ngModelChange"],["type","text","disabled","","nbInput","","fullWidth","","status","basic","placeholder","Title",3,"ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","status","basic","placeholder","Title",3,"disabled","ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","status","basic","placeholder","Title",3,"ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","status","basic","placeholder","Content",3,"ngModel","ngModelChange"],["type","text","id","section_content_fr","nbInput","","fullWidth","","status","basic","placeholder","Content - FR",3,"ngModel","ngModelChange"],["placeholder","Select page",3,"ngModel","ngModelChange"],["value","home"],["value","trains"],["value","buses"],["value","flights"],["value","parcels"],["type","file","name","profile_image","id","imageUpload","accept","image/*",3,"change"],["class","pt-3 section_image",4,"ngIf"],[1,"pt-3"],["style","font-style:italic",4,"ngIf"],[1,"pt-3","section_image"],[2,"font-style","italic"],[1,"mt-3"],["status","danger",1,"btn","btn-danger",3,"disabled","click"],["class","btn btn-dark ml-3",3,"click",4,"ngIf"],["status","primary",1,"btn","btn-primary","ml-3",3,"disabled","click"],[1,"btn","btn-dark","ml-3",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card",0),m["\u0275\u0275elementStart"](1,"nb-card-body",1),m["\u0275\u0275template"](2,w,18,7,"nb-list",2),m["\u0275\u0275template"](3,N,9,8,"nb-list",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,W,7,4,"nb-card-footer",4),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("nbSpinner",t.loading),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","view"==t.dialogAction),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","edit"==t.dialogAction||"add"==t.dialogAction),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","view"!=t.dialogAction))},directives:[c.s,c.r,c.kb,r.NgIf,c.R,c.S,c.I,f.DefaultValueAccessor,f.NgControlStatus,f.NgModel,c.fb,c.Y,c.t],styles:["nb-list-item .title h6{font-weight:600;margin:unset}nb-list-item .content .title{margin-top:10px}nb-list-item .content pre{background:#efeaea;display:block}nb-card-body{max-height:80vh;overflow:scroll;min-width:700px}.pdf-icon{font-size:3rem;background:#efeaea;padding:30px}.max-height-100{max-height:100px}.color-unset{color:unset!important}.dialog-list{overflow:unset!important}.heading-trip{min-width:100%;display:block;color:#0095ff;margin-bottom:23px;font-size:25px;background:#f1f1f1;padding:10px;border-top:2px solid}.nb-theme-default nb-option-list{min-width:300px!important}.content nb-list-item{align-items:end}.section_image img{max-width:100%}"],encapsulation:2}),B),U=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.web_id=n.web_id||"",this.action=n.action||"",this.page_name=n.page_name||"",this.section_name=n.section_name||"",this.section_title=n.section_title||"",this.section_title_fr=n.section_title_fr||"",this.section_content=n.section_content||"",this.section_content_fr=n.section_content_fr||"",this.section_image=n.section_image||"",this.need_editor=n.need_editor||"",this.need_image_upload=n.need_image_upload||"",this.need_image_upload_only=n.need_image_upload_only||""},H=i("RS3s");function q(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",3),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().createRow()})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"]("Faq Item"==a.pageName?"Add FAQ item":"Add Images")}}var J,L,K,Q=[{path:":section",component:(J=function(){function t(n,a,i,o){var r=this;e(this,t),this.windowService=n,this.web=a,this.common=i,this.activeRoute=o,this.base_url=u.a.base_url,this.tableSettings={add:{addButtonContent:'<i class="nb-plus"></i>'},edit:{editButtonContent:'<i class="fa fa-edit"></i>'},delete:{deleteButtonContent:'<i class="fa fa-trash"></i>'},actions:{columnTitle:"Actions",add:!1,edit:!0,delete:!1,position:"right"},sort:!0,mode:"external",pager:{perPage:10},columns:{page_name:{title:"Page",type:"string",width:"150px",valuePrepareFunction:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},section_name:{title:"Section name",type:"string",width:"200px",show:!1,valuePrepareFunction:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},section_title:{title:"Section title",type:"string",valuePrepareFunction:function(e){return e||"---"}},section_content:{title:"Content",type:"html",valuePrepareFunction:function(e,t){var n="uploads/sliders/";return"banner"==t.section_name&&(n="uploads/banners/"),"1"==t.need_image_upload?'<img class="slider_image" src="'+r.base_url+n+t.section_image+'">':e.length>100?e.substring(0,100)+"...":e}}}}}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.activeRoute.paramMap.subscribe((function(t){console.log(t),t.has("section")&&(e.loading||e.getPageData(t.params.section),e.pageNameCalculator(t.params.section))}))}},{key:"ngOnDestroy",value:function(){console.log("destroy")}},{key:"createRow",value:function(){var e=this,t=this.createRowCalculate(),n=this.windowService.open(z,{title:"Add Content",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:t,action:"add"},windowClass:"formWindow"});this.webSubscription=n.onClose.pipe().subscribe((function(t){console.log(t),e.ngOnInit()}))}},{key:"createRowCalculate",value:function(){var e=new U,t=this.pageName;return"Banner"!=t&&"Slider"!=t||(e.section_name="Banner"==t?"banner":"slider",e.need_image_upload="1",e.need_image_upload_only="1"),"Faq Item"==t&&(e.page_name="becomeapartner",e.need_image_upload="0",e.section_name="faq_item",e.need_image_upload_only="0"),e}},{key:"deleteRow",value:function(e){var t=this;console.log(e),window.confirm("Are you sure you want to delete?")&&this.web.postData("contentDelete",e.data).then((function(e){"200"==e.status?(t.common.presentToast(e.error,"Success"),t.ngOnInit()):t.common.presentToast(e.error,"Failed")}),(function(e){t.common.presentToast("Connection Error")}))}},{key:"editRow",value:function(e){var t=this,n=this.windowService.open(z,{title:"Edit Contents",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:e.data,action:"edit"},windowClass:"formWindow"});this.webSubscription=n.onClose.subscribe((function(e){console.log(e),t.ngOnInit()}))}},{key:"getPageData",value:function(e){var t=this;this.loading=!0,this.web.getData("getWebsiteContents?section="+e).then((function(e){t.loading=!1,"200"==e.status?t.mappingTableData(e.data):t.common.presentToast(e.error,"Error")}),(function(e){t.loading=!1,t.common.presentToast("Connection Error","Error")})),console.log(e)}},{key:"mappingTableData",value:function(e){this.tableSource=e,this.tableSourceTemp=JSON.parse(JSON.stringify(e)),this.tableSource.map((function(e){return e}))}},{key:"pageNameCalculator",value:function(e){var t=e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");this.pageName=t}},{key:"selectRow",value:function(e){var t=this.windowService.open(z,{title:"View Content",hasBackdrop:!0,closeOnBackdropClick:!1,context:{data:e.data,action:"view"},windowClass:"formWindow"});this.webSubscription=t.onClose.pipe().subscribe((function(e){console.log(e)}))}}]),t}(),J.\u0275fac=function(e){return new(e||J)(m["\u0275\u0275directiveInject"](c.xb),m["\u0275\u0275directiveInject"](g.a),m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](l.a))},J.\u0275cmp=m["\u0275\u0275defineComponent"]({type:J,selectors:[["ngx-contents"]],decls:6,vars:6,consts:[[3,"nbSpinner","nbSpinnerMessage"],["class","btn btn-primary float-right",3,"click",4,"ngIf"],[3,"settings","source","userRowSelect","edit","delete"],[1,"btn","btn-primary","float-right",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card",0),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275text"](2),m["\u0275\u0275template"](3,q,2,1,"button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"nb-card-body"),m["\u0275\u0275elementStart"](5,"ng2-smart-table",2),m["\u0275\u0275listener"]("userRowSelect",(function(e){return t.selectRow(e)}))("edit",(function(e){return t.editRow(e)}))("delete",(function(e){return t.deleteRow(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("nbSpinner",t.loading)("nbSpinnerMessage","Fetching deta.."),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" Manage Contents - ",t.pageName," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","Contacts"!=t.pageName&&"Social Link"!=t.pageName&&"Banner"!=t.pageName),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("settings",t.tableSettings)("source",t.tableSource))},directives:[c.s,c.kb,c.u,r.NgIf,c.r,H.a],styles:[".times{color:red}.check,.times{width:100%;text-align:center;font-size:1.5rem;cursor:pointer}.check{color:green}.nb-theme-default ng2-smart-table .ng2-smart-actions a.ng2-smart-action{font-size:1.3rem!important}.slider_image{max-width:20vw}"],encapsulation:2}),J)}],X=((L=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[l.g.forChild(Q)],l.g]}),L),$=i("9A7S"),G=((K=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},providers:[p,r.DatePipe],imports:[[r.CommonModule,X,c.v,c.T,c.J,f.FormsModule,H.b,c.q,c.vb.forChild(),c.lb,c.gb,c.l,$.CKEditorModule]]}),K)},vQDl:function(e,t){window.CKEDITOR_BASEPATH="//cdn.ckeditor.com/4.6.2/full-all/"}}])}();