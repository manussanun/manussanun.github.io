google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['ปี', 'งบประมาณ'],
        [2547,2801935611],
        [2548,2797748292],
        [2549,2234020419],
        [2550,8086752893],
        [2551,4666493340],
        [2552,3185929634],
        [2553,2425342603],
        [2554,2042065035],
        [2555,1976392708],
        [2556,3144875924],
        [2557,4420192108],
        [2558,5983360042],
        [2559,6797058154],
        [2560,5455797890],
        [2561,5445794912],
        [2562,5654209034]
    ]);

    var options = {
        title: 'งบประมาณแบ่งตามปี',
        pieHole: 0.5
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('ministry_pie'));
    chart.draw(data, options);
}
