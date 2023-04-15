import {Component, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  ngOnInit() {

    /*-- == Chart One -Start- == --*/
    // @ts-ignore
    const chartOneOptions: ApexCharts.ApexOptions = {
      series: [
        {
          name: 'Villa',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },

        {
          name: 'Duplex',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        },
        {
          name: 'Appartement',
          data: [23, 40, 36, 33, 45, 16, 64, 55, 59, 59, 39, 21],
        },
      ],
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
      },
      colors: ['#3C50E0', '#80CAEE','#ed4635'],
      chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
          enabled: true,
          color: '#623CEA14',
          top: 10,
          blur: 4,
          left: 0,
          opacity: 0.1,
        },

        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 1366,
          options: {
            chart: {
              height: 350,
            },
          },
        },
      ],
      stroke: {
        width: [2, 2],
        curve: 'straight',
      },

      markers: {
        size: 0,
      },
      labels: {
        //@ts-ignore
        show: false,
        position: 'top',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category',
        categories: [
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          style: {
            fontSize: '0px',
          },
        },
        min: 0,
        max: 100,
      },
    };

    const chartOne = new ApexCharts(document.querySelector('#chartOne'), chartOneOptions);
    chartOne.render();
    /*-- == Chart One -End- == --*/

    this.chart02()

  }
  chart02 = () => {
    const chartTwoOptions = {
      series: [
        {
          name: "This Month",
          data: [44, 55, 41, 67, 22, 43, 65],
        },
        {
          name: "Last Month",
          data: [13, 23, 20, 8, 13, 27, 15],
        },
      ],
      colors: ["#3056D3", "#80CAEE"],
      chart: {
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },

      responsive: [
        {
          breakpoint: 1536,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: "25%",
              },
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          columnWidth: "25%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
          radius: 99,
        },
      },
      fill: {
        opacity: 1,
      },
    };

    const chartSelector = document.querySelectorAll("#chartTwo");

    if (chartSelector.length) {
      const chartTwo = new ApexCharts(
        document.querySelector("#chartTwo"),
        chartTwoOptions
      );
      chartTwo.render();
    }
    /*---------*/
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const closeBtn = document.querySelector<HTMLElement>("#btn");

    // @ts-ignore
    closeBtn.addEventListener("click",function (){
      // @ts-ignore
      sidebar.classList.toggle("open");
      menuBtnChange();
    });
    function menuBtnChange(){
      // @ts-ignore
      if(sidebar.classList.contains("open")){
        // @ts-ignore
        closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
      }else{
        // @ts-ignore
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
      }
    }
      /*---------*/
  };
}
