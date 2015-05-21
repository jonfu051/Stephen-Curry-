

var data = {
    labels : ["2010","2011","2012","2013","2014","2015"],
    datasets : [
        {
            fillColor : "rgba(255,204,51,0.8)",
            strokeColor : "rgba(255,204,51,1)",
            pointColor : "rgba(255,255,255,1)",
            pointStrokeColor : "#fff",
            data : [528,505,145,626,652,653]
        },
        {
            fillColor : "rgba(4,82,156,0.8)",
            strokeColor : "rgba(4,82,156,1)",
            pointColor : "rgba(255,0,0,1)",
            pointStrokeColor : "#fff",
            data : [166,151,55,272,261,286]
        }
    ]
}

var options =  {
    scaleGridLineColor : "rgba(255,255,255,0.6)",
    scaleFontSize: 15,
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    scaleFontColor: "rgb(255,204,51)",
    scaleOverride: true,
    scaleSteps: 7,
    scaleStepWidth: 100,
    scaleStartValue: 0,


}

var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myNewChart = new Chart(ctx);
new Chart(ctx).Line(data, options);
