import { Component, OnDestroy } from '@angular/core';
//import { takeWhile } from 'rxjs/operators' ;
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { CommonService } from '../../providers/common.service';
import { WebService } from '../../providers/web.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {
  optionsBar: any;
  optionsPie: any;
  themeSubscription: any;

  ticketsData: any = {}
  ticketsDataChart: any = {}
  commissionsData: any = {}
  commissionsDataChart: any = {}
  salesData: any = {}
  salesDataChart: any = {}
  paymentmethodsData: any = {}
  paymentmethodsDataChart: any = {}
  channelsData: any = {}
  channelsDataChart: any = {}
  lastThreeMonthsData: any = {}
  lastThreeMonthsDataChart: any = {}
  ticketsSoldPerPriceData: any = {}
  ticketsSoldPerPriceDataChart: any = {}

  loading:boolean;


  constructor(private common: CommonService, private web: WebService, private theme: NbThemeService, private datePipe: DatePipe) {
    this.getDashboardContents();
  }

  currencyConverter(num: any) {
    if (num == "---") {
      return "----";
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "CFA",
      minimumFractionDigits: 0,
    });

    return formatter.format(num).split(",").join(" ");
  }


  getDashboardContents(){
    this.loading = true;
    this.web.postData('madeDashboardData', { "auth": "travel_data"}).then(res=>{
      this.loading = false;
      if(res.status=='200'){
        this.ticketsData = res.ticketsData
        this.salesData = res.salesData
        this.commissionsData = res.commissionsData
        this.paymentmethodsData = res.paymentMethodsData
        this.channelsData = res.channelsData
        this.lastThreeMonthsData = res.lastThreeMonthsPerformance
        this.ticketsSoldPerPriceData = res.ticketsSoldPerPrice
        this.processFetchedData();
      }else{
        this.common.presentToast(res.error, 'Error');
      }
    }, err=>{
      console.log(err);
      this.loading = false;
    })
  }

  ngOnDestroy() {

  }


  processFetchedData() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;


      let labelTemp = Object.keys(this.lastThreeMonthsData).reverse();
      labelTemp = labelTemp.map(x =>{
        x = this.datePipe.transform(x,'mediumDate');
        return x;
      })
      let dataTemp = Object.values(this.lastThreeMonthsData).reverse();

      //console.log(labelTemp, dataTemp);

      this.lastThreeMonthsDataChart = {
        labels: labelTemp,
        datasets: [{
          label: 'Performance',
          backgroundColor: colors.infoLight,
          borderWidth: 1,
          data: dataTemp,
        }],
      };

      this.ticketsDataChart = {
        labels: ['Buses', 'Trains', 'Flights'],
        datasets: [{
          label: 'No of tickets',
          backgroundColor: [colors.primaryLight, '#28a745', '#ffc107'],
          borderWidth: 1,
          data: [this.ticketsData.noOfTicketsBus, this.ticketsData.noOfTicketsTrain, this.ticketsData.noOfTicketsFlight],
        }]
      }

      this.commissionsDataChart = {
        labels: ['Buses', 'Trains', 'Flights'],
        datasets: [
          {
          label: 'Total Commission Amount',
          backgroundColor: [colors.primaryLight, '#28a745', '#ffc107'],
          borderWidth: 1,
          data: [this.commissionsData.totalCommissionBus, this.commissionsData.totalCommissionTrain, this.commissionsData.totalCommissionFlight]
        },
      ]
      }

      this.salesDataChart = {
        labels: ['Buses', 'Trains', 'Flights'],
        datasets: [{
          label: 'Total Sales Amount',
          backgroundColor: [colors.primaryLight, '#28a745', '#ffc107'],
          borderWidth: 1,
          data: [this.salesData.totalSalesBus, this.salesData.totalSalesTrain, this.salesData.totalSalesFlight]
        }]
      }



      this.optionsBar = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 1,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };


      this.paymentmethodsDataChart = {
        labels: ['Card', 'MTN', 'Orange Money'],
        datasets: [{
          data: [this.paymentmethodsData.card_payment, this.paymentmethodsData.mtn_payment, this.paymentmethodsData.momo_payment],
          backgroundColor: [colors.primaryLight, '#FFFF00', '#ffc107'],
        }],
      };

      // this.paymentmethodsDataChart = {
      //   labels: ['Card', 'MTN', 'Orange Money'],
      //   datasets: [
      //     {
      //     	label: 'Card',
      //       data: [this.paymentmethodsData.card_payment],
      //       backgroundColor: [colors.primaryLight, ],
      //     }, {
      //     	label: 'MTN',
      //       data: [this.paymentmethodsData.mtn_payment],
      //       backgroundColor: ['#FFFF00'],
      //     }, {
      //     	label: 'Orange Money',
      //       data: [this.paymentmethodsData.momo_payment],
      //       backgroundColor: ['#FF8C00'],
      //     },
      // ],
      // };

      this.channelsDataChart = {
        labels: ['Website', 'Mobile App'],
        datasets: [{
          data: [this.channelsData.website_channel, this.channelsData.app_channel],
          backgroundColor: ['#ffc107', colors.primaryLight],
        }],
      };

      this.ticketsSoldPerPriceDataChart = {
        labels: ['Below 5 000 Fcfa', '5 000 to 10 000 Fcfa', '10 000 to 20 000 Fcfa', 'Above 20 000 Fcfa'],
        datasets: [{
          data: [this.ticketsSoldPerPriceData.amount_1, this.ticketsSoldPerPriceData.amount_2, this.ticketsSoldPerPriceData.amount_3, this.ticketsSoldPerPriceData.amount_4],
          backgroundColor: [colors.primaryLight, '#ffc107', '#FFFF00', '#008000' ]
        }],
      };

      this.optionsPie = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };

    });
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
