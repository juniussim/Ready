System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChartDirective;
    return {
        setters:[],
        execute: function() {
            ChartDirective = (function () {
                function ChartDirective(el, renderer) {
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
                    var ctx = el.nativeElement.getContext("2d");
                    var lineChart = new Chart(ctx);
                    ////var lineChartOptions = areaChartOptions;
                    ////lineChartOptions.datasetFill = false;
                    lineChart.Line(data);
                }
                return ChartDirective;
            }());
            exports_1("ChartDirective", ChartDirective);
        }
    }
});

//# sourceMappingURL=chart.directive.js.map
