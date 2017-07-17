import { Injectable } from '@angular/core';

const SVG_WIDTH = 1500;
const SVG_HEIGHT = 800;
const SVG_PADDING_TOP = 200;
const RECTANGLE_WIDTH = 160;
const RECTANGLE_HEIGHT = 50;
const CIRCLE_R = 60;
const FONT_SIZE = "20px";

const FILL_COLOR = "#cff3f7";
const STROKE_COLOR = '#29c1e8';
@Injectable()
export class ChartService {
    svg: any;
    constructor() {
        this.svg = this._createElement("svg", {
            class: "svg",
            width: SVG_WIDTH,
            height: SVG_HEIGHT
        });
    }

    drawMap() {
        let text = ["Idea", "Define", "Design", "Develop", "POC"];

        //Draw first line
        let svgPaddingTop = SVG_PADDING_TOP;
        for (let i = 0; i < 5; i++) {
            this._drawCircleWithValue(
                10 + RECTANGLE_WIDTH / 2 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop - 100, CIRCLE_R,
                10
            );

            this._drawRoundedRectangle(
                text[i],
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

        text = ["Start Up", "Detection", "Survey", "Call / Demo", "Evaluation", "Pilot", "MVP"];

        //Draw second line
        svgPaddingTop = SVG_PADDING_TOP + 400;
        for (let i = 0; i < 5; i++) {
            this._drawCircleWithValue(
                10 + RECTANGLE_WIDTH / 2 + RECTANGLE_WIDTH * i + 50 * i,
                svgPaddingTop - 100, CIRCLE_R,
                10
            );

            this._drawRoundedRectangle(
                text[i],
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
                    text[i + 1],
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
                    text[i + 2],
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
}