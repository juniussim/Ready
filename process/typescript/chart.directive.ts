import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
@Directive({
    selector: '[chart]'
})

interface ChartDataSet {
    label: string;
    fillColor: string;
    strokeColor: string;

    /* Line, Radar */
    pointColor?: string;
    pointStrokeColor?: string;
    pointHighlightFill?: string;
    pointHighlightStroke?: string;

    /* Bar */
    highlightFill?: string;
    highlightStroke?: string;
    data: number[];
}

interface LinearChartData {
    labels: string[];
    datasets: ChartDataSet[];
}

interface CircularChartData {
    value: number;
    color?: string;
    highlight?: string;
    label?: string;
}

interface ChartSettings {
    animation?: boolean;
    animationSteps?: number;
    animationEasing?: string;
    showScale?: boolean;
    scaleOverride?: boolean;
    scaleSteps?: number;
    scaleStepWidth?: number;
    scaleStartValue?: number;
    scaleLineColor?: string;
    scaleLineWidth?: number;
    scaleShowLabels?: boolean;
    scaleLabel?: string;
    scaleIntegersOnly?: boolean;
    scaleBeginAtZero?: boolean;
    scaleFontFamily?: string;
    scaleFontSize?: number;
    scaleFontStyle?: string;
    scaleFontColor?: string;
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    showTooltips?: boolean;
    tooltipEvents?: string[];
    tooltipFillColor?: string;
    tooltipFontFamily?: string;
    tooltipFontSize?: number;
    tooltipFontStyle?: string;
    tooltipFontColor?: string;
    tooltipTitleFontFamily?: string;
    tooltipTitleFontSize?: number;
    tooltipTitleFontStyle?: string;
    tooltipTitleFontColor?: string;
    tooltipYPadding?: number;
    tooltipXPadding?: number;
    tooltipCaretSize?: number;
    tooltipCornerRadius?: number;
    tooltipXOffset?: number;
    tooltipTemplate?: string;
    multiTooltipTemplate?: string;
    onAnimationProgress?: () => any;
    onAnimationComplete?: () => any;
}

interface ChartOptions extends ChartSettings {
    scaleShowGridLines?: boolean;
    scaleGridLineColor?: string;
    scaleGridLineWidth?: number;
    scaleShowHorizontalLines?: boolean;
    scaleShowVerticalLines?: boolean;
    legendTemplate?: string;
}

interface PointsAtEvent {
    value: number;
    label: string;
    datasetLabel: string;
    strokeColor: string;
    fillColor: string;
    highlightFill: string;
    highlightStroke: string;
    x: number;
    y: number;
}

interface ChartInstance {
    clear: () => void;
    stop: () => void;
    resize: () => void;
    destroy: () => void;
    toBase64Image: () => string;
    generateLegend: () => string;
}

interface LinearInstance extends ChartInstance {
    getPointsAtEvent: (event: Event) => PointsAtEvent[];
    update: () => void;
    addData: (valuesArray: number[], label: string) => void;
    removeData: (index?: number) => void;
}

interface CircularInstance extends ChartInstance {
    getSegmentsAtEvent: (event: Event) => {}[];
    update: () => void;
    addData: (valuesArray: CircularChartData, index?: number) => void;
    removeData: (index: number) => void;
    segments: Array<CircularChartData>;
}

interface LineChartOptions extends ChartOptions {
    bezierCurve?: boolean;
    bezierCurveTension?: number;
    pointDot?: boolean;
    pointDotRadius?: number;
    pointDotStrokeWidth?: number;
    pointHitDetectionRadius?: number;
    datasetStroke?: boolean;
    datasetStrokeWidth?: number;
    datasetFill?: boolean;
}

interface BarChartOptions extends ChartOptions {
    scaleBeginAtZero?: boolean;
    barShowStroke?: boolean;
    barStrokeWidth?: number;
    barValueSpacing?: number;
    barDatasetSpacing?: number;
}

interface RadarChartOptions extends ChartSettings {
    scaleShowLine?: boolean;
    angleShowLineOut?: boolean;
    scaleShowLabels?: boolean;
    scaleBeginAtZero?: boolean;
    angleLineColor?: string;
    angleLineWidth?: number;
    pointLabelFontFamily?: string;
    pointLabelFontStyle?: string;
    pointLabelFontSize?: number;
    pointLabelFontColor?: string;
    pointDot?: boolean;
    pointDotRadius?: number;
    pointDotStrokeWidth?: number;
    pointHitDetectionRadius?: number;
    datasetStroke?: boolean;
    datasetStrokeWidth?: number;
    datasetFill?: boolean;
    legendTemplate?: string;
}

interface PolarAreaChartOptions extends ChartSettings {
    scaleShowLabelBackdrop?: boolean;
    scaleBackdropColor?: string;
    scaleBeginAtZero?: boolean;
    scaleBackdropPaddingY?: number;
    scaleBackdropPaddingX?: number;
    scaleShowLine?: boolean;
    segmentShowStroke?: boolean;
    segmentStrokeColor?: string;
    segmentStrokeWidth?: number;
    animationSteps?: number;
    animationEasing?: string;
    animateRotate?: boolean;
    animateScale?: boolean;
    legendTemplate?: string;
}

interface PieChartOptions extends ChartSettings {
    segmentShowStroke?: boolean;
    segmentStrokeColor?: string;
    segmentStrokeWidth?: number;
    percentageInnerCutout?: number;
    animationSteps?: number;
    animationEasing?: string;
    animateRotate?: boolean;
    animateScale?: boolean;
    legendTemplate?: string;
}

interface Chart {
    Line(data: LinearChartData, options?: LineChartOptions): LinearInstance;
    Bar(data: LinearChartData, options?: BarChartOptions): LinearInstance;
    Radar(data: LinearChartData, options?: RadarChartOptions): LinearInstance;

    PolarArea(data: CircularChartData[], options?: PolarAreaChartOptions): CircularInstance;
    Pie(data: CircularChartData[], options?: PieChartOptions): CircularInstance;
    Doughnut(data: CircularChartData[], options?: PieChartOptions): CircularInstance;
}

declare var Chart: {
    new (context: CanvasRenderingContext2D): Chart;
    defaults: {
        global: ChartSettings;
    }
};

export class ChartDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        var ctx: any = el.nativeElement.getContext("2d");
        var lineChart = new Chart(ctx);
        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;
        lineChart.Line(data);
     }
}
