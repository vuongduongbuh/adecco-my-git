import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';

const SVG_WIDTH = 1500;
const SVG_HEIGHT = 800;
const SVG_PADDING_TOP = 200;
const RECTANGLE_WIDTH = 160;
const RECTANGLE_HEIGHT = 50;
const CIRCLE_R = 60;
const FONT_SIZE = "20px";

const FILL_COLOR = "#dcf1f7";
const STROKE_COLOR = '#29c1e8';

@Component({
    selector: 'annual-pipeline-chart',
    templateUrl: './annual-pipeline.html',
    styleUrls: ['./annual-pipeline.scss']
})

export class AnnualPipelineChart {
    private svg: any;
    @Input('datasets')
    datasets: any;
    constructor() {
        this.svg = this._createElement("svg", {
            class: "svg",
            width: SVG_WIDTH,
            height: SVG_HEIGHT
        });

        this.datasets = {
            firstStep: {
                circleValue: [10, 20, 30, 40, 50],
                rectangleText: ["Idea", "Define", "Design", "Develop", "POC"],
                text: ["Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie"]
            },
            lastStep: {
                circleValue: [1000, 20, 30, 40, 100],
                rectangleText: ["Start Up", "Detection", "Survey", "Call / Demo", "Evaluation", "Pilot", "MVP"],
                text: ["Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie",
                    "Nam sollicitudin lorem magna, sed ullamcorper sapien molestie"],
                lastCircleValue: [[70, 80], [60, 100]]
            },
        }

        setTimeout(() => {
            this.drawCharts();

            // let chartComponent = document.getElementById('chart--annual-pipeline');
            // chartComponent.appendChild(this.svg);
        }, 400);
    }

    drawCharts() {

        let selector = document.querySelector('.chart-annual-pipeline__map');

        selector.appendChild(this.drawMap());

        this.drawPieChart(".chart-annual-pipeline__pilot canvas");
        this.drawPieChart(".chart-annual-pipeline__mvp canvas");
    }

    drawMap() {
        //Draw first line
        let svgPaddingTop = SVG_PADDING_TOP;
        for (let i = 0; i < 5; i++) {
            this._drawCircleWithValue(
                10 + RECTANGLE_WIDTH / 2 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop - 100, CIRCLE_R,
                this.datasets.firstStep.circleValue[i]
            );

            this._drawRoundedRectangle(
                this.datasets.firstStep.rectangleText[i],
                10 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop
            );

            if (i > 0) {
                this._drawLine(
                    10 + RECTANGLE_WIDTH * i + 50 * i,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    (10 + RECTANGLE_WIDTH * i + 50 * i) - 50,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2
                );
            }

            if (i == 4) {
                this._drawLine(
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i + 20,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2
                );

                this._drawLine(
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i + 20,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i + 50,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2 + 400
                );
            }
        }

        //Draw second line
        svgPaddingTop = SVG_PADDING_TOP + 400;
        for (let i = 0; i < 5; i++) {
            this._drawCircleWithValue(
                10 + RECTANGLE_WIDTH / 2 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop - 100, CIRCLE_R,
                this.datasets.lastStep.circleValue[i]
            );

            this._drawRoundedRectangle(
                this.datasets.lastStep.rectangleText[i],
                10 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop
            );

            if (i > 0) {
                this._drawLine(
                    10 + RECTANGLE_WIDTH * i + 50 * i,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    (10 + RECTANGLE_WIDTH * i + 50 * i) - 50,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2
                );
            }

            if (i == 4) {
                this._drawLine(
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i + 100,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2
                );

                this._drawRoundedRectangle(
                    this.datasets.lastStep.rectangleText[i + 1],
                    10 + RECTANGLE_WIDTH * (i + 1) + 50 * i + 100,
                    svgPaddingTop
                );

                this._drawLine(
                    10 + RECTANGLE_WIDTH * (i + 2) + 50 * i + 150,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2,
                    10 + RECTANGLE_WIDTH * (i + 2) + 50 * i + 100,
                    svgPaddingTop + RECTANGLE_HEIGHT / 2
                );

                this._drawRoundedRectangle(
                    this.datasets.lastStep.rectangleText[i + 2],
                    10 + RECTANGLE_WIDTH * (i + 2) + 50 * i + 150,
                    svgPaddingTop
                );
            }
        }

        return this.svg;
    }

    private _createElement(tag, attr) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', tag);

        for (let a in attr) {
            e.setAttribute(a, attr[a]);
        }

        return e;
    }

    private _drawRoundedRectangle(text, x, y, width = RECTANGLE_WIDTH, height = RECTANGLE_HEIGHT) {
        let rec = this._createElement("rect", {
            x: x,
            y: y,
            rx: 5,
            ry: 5,
            width: width,
            height: height,
            style: "fill:" + FILL_COLOR + ";stroke-width:2;stroke:" + STROKE_COLOR
        });

        this.svg.appendChild(rec);
        this._drawText(text, x + width / 2, y + height / 2, "middle", "middle");

    }

    private _drawText(text, x, y, textAnchor = "", alignmentBaseline = "", fontSize = FONT_SIZE) {
        let txt = this._createElement("text", {
            x: x,
            y: y,
            "alignment-baseline": textAnchor,
            "text-anchor": alignmentBaseline,
            fill: "#000",
            style: "font-size:" + fontSize + ";font-weight: bold"
        });

        txt.appendChild(document.createTextNode(text));
        this.svg.appendChild(txt);
    }

    private _drawLine(x1, y1, x2, y2) {
        let line = this._createElement("line", {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            style: "stroke-width:2;stroke:" + STROKE_COLOR
        });
        this.svg.appendChild(line);
    }

    private _drawCircleWithValue(x, y, r, value) {
        let circle = this._createElement("circle", {
            cx: x,
            cy: y,
            r: r,
            style: "fill:" + FILL_COLOR + ";stroke-width:2;stroke:" + STROKE_COLOR
        });
        this.svg.appendChild(circle);
        this._drawText(value, x, y, "middle", "middle", "30px");
    }



    drawPieChart(canvas) {
        let ctx = (<HTMLCanvasElement>document.querySelector(canvas)).getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Green", "Blue"],
                datasets: [{
                    backgroundColor: [
                        "#dcf1f7",
                        "#aaf0ff"
                    ],
                    data: [12, 19]
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });

        // Chart.pluginService.register({
        //     beforeDraw: function (chart) {
        //         // console.log("AAAA");
        //         // console.log(chart);
        //         // let width = chart['chart'].width,
        //         //     height = chart['chart'].height,
        //         //     ctx = chart['chart'].ctx;

        //         // ctx.restore();
        //         // let fontSize = (height / 114).toFixed(2);
        //         // ctx.font = fontSize + "em sans-serif";
        //         // ctx.textBaseline = "middle";

        //         // let text = value,
        //         //     textX = Math.round((width - ctx.measureText(text).width) / 2),
        //         //     textY = height / 2;


        //     }
        // });
    }
}
