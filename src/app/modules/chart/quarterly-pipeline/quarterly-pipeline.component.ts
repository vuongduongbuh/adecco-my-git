import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'quarterly-pipeline-chart',
    templateUrl: './quarterly-pipeline.html'
})

export class QuarterlyPipelineChart {
    @Input('datasets')
    datasets: any;
    constructor() {
        
    }
    
}
