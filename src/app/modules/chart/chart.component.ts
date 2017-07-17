import { Component } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss']
})
export class ChartComponent {
  constructor() {

    setTimeout(() => {
      this._drawChart();
    }, 400);

  }

  _drawChart() {
    var ctx = (<HTMLCanvasElement>document.getElementById("chart--quarterly")).getContext('2d');

    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 20, 81, 56, 55, 40],
        }
      ]
    };
    var option = {
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: option
    });
  }
}
