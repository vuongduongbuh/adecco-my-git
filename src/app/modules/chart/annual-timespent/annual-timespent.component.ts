import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'annual-timespent-chart',
    templateUrl: './annual-timespent.html'
})

export class AnnualTimespentChart {
    @Input('datasets')
    datasets: any;
    constructor() {

    }

}
