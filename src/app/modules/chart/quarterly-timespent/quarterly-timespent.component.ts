import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'quarterly-timespent-chart',
    templateUrl: './quarterly-timespent.html'
})

export class QuarterlyTimespentChart {
    @Input('datasets')
    datasets: any;
    constructor() {
        this.datasets = {
            bigBets: {
                topLine: [65, 59, 20, 81, 56, 55, 40],
                government: [65, 59, 20, 81, 56, 55, 40],
                enterprise: [65, 59, 20, 81, 56, 55, 40],
                smb: [65, 59, 20, 81, 56, 55, 40]
            },
            clientFocus: {
                topLine: [65, 59, 20, 81, 56, 55, 40],
                government: [65, 59, 20, 81, 56, 55, 40],
                enterprise: [65, 59, 20, 81, 56, 55, 40],
                smb: [65, 59, 20, 81, 56, 55, 40]
            },
            moonShots: {
                topLine: [65, 59, 20, 81, 56, 55, 40],
                government: [65, 59, 20, 81, 56, 55, 40],
                enterprise: [65, 59, 20, 81, 56, 55, 40],
                smb: [65, 59, 20, 81, 56, 55, 40]
            }
        }

        setTimeout(() => {
            this.drawChart();
        }, 1000)
    }
    drawChart() {
        // var ctx = (<HTMLCanvasElement>document.getElementById("chart--quarterly")).getContext('2d');
        let ctx = (<HTMLCanvasElement>document.getElementById("myChart")).getContext('2d');
        let ctx1 = (<HTMLCanvasElement>document.getElementById("myChart1")).getContext('2d');
        let ctx2 = (<HTMLCanvasElement>document.getElementById("myChart2")).getContext('2d');

        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Q1'],
                datasets: [{
                    type: "line",
                    data: this.datasets.bigBets.topLine,
                    backgroundColor: "transparent",
                    borderColor: "#FFBDC9"
                }, {
                    label: 'Government',
                    data: this.datasets.bigBets.government,
                    backgroundColor: "#D7F2F2"
                }, {
                    label: 'Enterprise',
                    data: this.datasets.bigBets.enterprise,
                    backgroundColor: "#EBF9FE"
                }, {
                    label: 'SMB',
                    data: this.datasets.bigBets.smb,
                    backgroundColor: "#A5B4C6"
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Big Bets',
                    position: "bottom"
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
        let myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Q1'],
                datasets: [{
                    type: "line",
                    data: this.datasets.clientFocus.topLine,
                    backgroundColor: "transparent",
                    borderColor: "#FFBDC9",
                }, {
                    label: 'Government',
                    data: this.datasets.clientFocus.government,
                    backgroundColor: "#D7F2F2"
                }, {
                    label: 'Enterprise',
                    data: this.datasets.clientFocus.enterprise,
                    backgroundColor: "#EBF9FE"
                }, {
                    label: 'SMB',
                    data: this.datasets.clientFocus.smb,
                    backgroundColor: "#A5B4C6"
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Client Focus',
                    position: "bottom"
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
        let myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Q1'],
                datasets: [{
                    type: "line",
                    data: this.datasets.moonShots.topLine,
                    backgroundColor: "transparent",
                    borderColor: "#FFBDC9"
                }, {
                    label: 'Government',
                    data: this.datasets.moonShots.government,
                    backgroundColor: "#D7F2F2"
                }, {
                    label: 'Enterprise',
                    data: this.datasets.moonShots.enterprise,
                    backgroundColor: "#EBF9FE"
                }, {
                    label: 'SMB',
                    data: this.datasets.moonShots.smb,
                    backgroundColor: "#A5B4C6"
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Moon Shots',
                    position: "bottom"
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }
}
