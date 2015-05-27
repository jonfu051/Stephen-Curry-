var inView = false;

var oldScrollTop = $(window).scrollTop();

function isScrolledIntoView(elem) {

    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var scrollingDown = docViewTop > oldScrollTop;
    oldScrollTop = docViewTop;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if (scrollingDown) {
        return docViewBottom >= elemBottom
    } else {
        return docViewTop <= elemTop
    }
}

//line chart data
var lineData = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [{
        label: "FG",
        fillColor: "rgba(255,204,51,0.8)",
        strokeColor: "rgba(255,204,51,1)",
        pointColor: "rgba(255,255,255,1)",
        pointStrokeColor: "#fff",
        data: [528, 505, 145, 626, 652, 653],
    }, {
        label: "3PT",
        fillColor: "rgba(4,82,156,0.8)",
        strokeColor: "rgba(4,82,156,1)",
        pointColor: "rgba(255,0,0,1)",
        pointStrokeColor: "#fff",
        data: [166, 151, 55, 272, 261, 286],
    }]
};

var lineOptions = {
    scaleGridLineColor: "rgba(255,255,255,0.6)",
    scaleFontSize: 15,
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    scaleFontColor: "rgb(255,204,51)",
    scaleOverride: true,
    scaleSteps: 7,
    scaleStepWidth: 100,
    scaleStartValue: 0,
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",


};

//FG and 3pt pie chart data
var fgPieData = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }, {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    }, {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];
var threePointData = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

var pieOptions = {
    segmentShowStroke: false,
    animateScale: true
}

// Radar chart
var radarData = {
    labels: ["MINUTES", "POINTS", "FIELD GOALS", "3-PT FIELD GOALS", "FREE THROWS", "REBOUNDS", "ASSISTS","STEALS","BLOCKS","TURNOVERS"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(255,204,51,0.8)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40, 81, 56, 55]
    }, {
        // label: "My Second dataset",
        // fillColor: "rgba(151,187,205,0.2)",
        // strokeColor: "rgba(151,187,205,1)",
        // pointColor: "rgba(151,187,205,1)",
        // pointStrokeColor: "#fff",
        // pointHighlightFill: "#fff",
        // pointHighlightStroke: "rgba(151,187,205,1)",
        // data: [28, 48, 40, 19, 96, 27, 100, 81, 56, 55]
    }]
};

var  radarOptions  = {
        // angleLineColor : "rgba(255,255,255,1)",

        // datasetStroke : true,

        scaleShowLine : true,
        scaleGridLineColor: "rgba(255,255,255,0.6)",
        scaleFontSize: 10,
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        scaleFontColor: "rgb(255,204,51)",
        pointLabelFontFamily : "'Arial'",
        scaleLineColor: "rgba(4,82,156,0.8)",
        scaleShowLabels : true
};


$(window).scroll(function() {
    if (isScrolledIntoView('#lineChart')) { //if scrolled in
        if (inView) {
            return;
        }
        inView = true;
        var lineChart = $("#lineChart").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var myNewChart = new Chart(lineChart);
        new Chart(lineChart).Line(lineData, lineOptions);
    } else {
        inView = false;
    }
});



$(document).ready(function() {

    //stats tab menu
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var $target = $(e.target),
            targetHref = $target.attr("href");
        var targetChartId = $target.data('chart'),
            $targetChart = $("#" + targetChartId);

        if ($targetChart.size() > 0 && !$target.data('initialized') && targetHref === '#secondTab') {
            var fgChart = $targetChart.get(0).getContext("2d");
            new Chart(fgChart).Pie(fgPieData, pieOptions);
            var threePointChart = $targetChart.get(0).getContext("2d");
            // new Chart(threePointChart).Pie(threePointData, pieOptions);
            $target.data({
                initialized: true
            });
        } else if ($targetChart.size() > 0 && !$target.data('initialized') && targetHref === '#thirdTab') {
            var drawRadarChart = $targetChart.get(0).getContext("2d");
            new Chart(drawRadarChart).Radar(radarData,radarOptions);
            $target.data({
                initialized: true
            });
        } else {

        }

    });

});
