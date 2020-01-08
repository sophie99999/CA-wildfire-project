var fresno_keys = Object.keys(fresno_temp[0]);
var years = fresno_keys.map(year => year.slice(0, 4));

function fresnoTempPlot() {
    var fresno_temp_values = Object.values(fresno_temp[0]);
    var fresno_temps = fresno_temp_values.map(function(temp) { return temp.value });

    var data = [{
        x: years,
        y: fresno_temps,
        type: 'scatter',
        mode: 'lines+markers',
        // name: 'Average Temperatures'
    }]

    var layout = {
        title: "Fresno County Average Temperatures",
        xaxis: {title: 'Years'},
        yaxis: {title: 'Temperature (Fahrenheit)'},
    };

    Plotly.plot("fresno_temp", data, layout)};

fresnoTempPlot();


function fresnoPrcpPlot() {
    var fresno_prcp_values = Object.values(fresno_prcp[0]);
    var prcp_keys = Object.keys(fresno_prcp[0]);
    var prcp_years = prcp_keys.map(year => year.slice(0, 4));
    var fresno_prcps = fresno_prcp_values.map(function(prcp) { return prcp.value });

    var data = [{
        x: prcp_years,
        y: fresno_prcps,
        type:'scatter',
        mode: 'lines+markers',
        // name: 'Precipitation'
    }];

    var layout = {
        title: 'Fresno County Total Precipitation',
        xaxis: {title: 'Years'},
        yaxis: {title: 'Precipitation (inches)'},
    };

    Plotly.plot("fresno_prcp", data, layout); 
}

fresnoPrcpPlot();