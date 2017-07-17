import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-chart-quarterly',
    template: "",
    styleUrls: ['./chart.scss']
})
export class ChartQuarterly {
    private svg; // SVG in which we will print our chart
    private margin = 10; // Space between the svg borders and the actual chart graphic
    private width = 800; // Component width
    private height = 600; // Component height

    @Input() config: any;
    /* Constructor, needed to get @Injectables */
    constructor() {
        this.svg = this._createElement("svg", {
            class: "svg",
            width: this.width,
            height: this.height,
            margin: this.margin
        })

        setTimeout(() => {
            this.drawChart();
        }, 1000)
    }

    /* Will Update on every @Input change */
    ngOnChanges() { }

    drawChart() {
        let chartComponent = document.querySelector('app-chart-quarterly');

        this._drawRoundedRectangle(30, 30, 100, 100);
        chartComponent.appendChild(this.svg);
    }

    private _createElement(tag, attr) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', tag);

        for (let a in attr) {
            e.setAttribute(a, attr[a]);
        }

        return e;
    }

    private _drawRoundedRectangle(x, y, width, height) {
        let rec = this._createElement("rect", {
            x: x,
            y: y,
            rx: 10,
            ry: 10,
            width: width,
            height: height
        });
        this.svg.appendChild(rec);
    }

    private _drawLine(x1, y1, x2, y2) {
        let line = this._createElement("line", {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        });
        this.svg.appendChild(line);
    }

    private _drawCircleWithValue(x, y, r, value) {
        let circle = this._createElement("circle", {
            cx: x,
            cy: y,
            r: r
        });

        this.svg.appendChild(circle);
    }


}
