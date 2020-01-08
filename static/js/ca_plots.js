var max_keys = Object.keys(max_temp[0]);
var years = max_keys.map(year => year.slice(0, 4));

function tempPlot() {
    var max_values = Object.values(max_temp[0]);
    var max_temps = max_values.map(function(temp) { return temp.value } );

    var avg_values = Object.values(avg_temp[0]);
    var avg_temps = avg_values.map(function(temp) { return temp.value} );

    var data = [
    {
        x: years,
        y: max_temps,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Max Temperatures'
    }, 
    {   x: years,
        y: avg_temps,
        type: 'scatter', 
        mode: 'lines+markers',
        name: 'Average Temperatures',
        marker: {
            color: 'rgb(238, 130, 238)'}
    }
    ];

    var layout = {
        title: 'California Temperatures',
        xaxis: {title: 'Years'},
        yaxis: {title: 'Temperature (Fahrenheit)'},
        yaxis2: {title: 'Precipitation (Inches)',
                 side: 'right',
                 overlaying: 'y'}
    };

    Plotly.plot("temp", data, layout)};

tempPlot();  

function prcpPlot() {
    var prcp_values = Object.values(prcp[0]);
    var prcp_totals = prcp_values.map(function(prcp) { return prcp.value} );

    var data = [{
        x: years,
        y: prcp_totals,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Precipitation (inches)'
    }];

    var layout = {
        title: 'California Precipitation',
        xaxis: {title: 'Years'},
        yaxis: {title: 'Precipitation (Inches)'}
    };

    Plotly.plot("prcp", data, layout);
    };

prcpPlot(); 