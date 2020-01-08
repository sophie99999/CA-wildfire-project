
// Heatmap for weather 
var myMap = L.map('map', {
  center: [38.09, -122.71],
  zoom: 5,
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,    
id: "mapbox.streets",    
accessToken: API_KEY    
}).addTo(myMap);


var url="/weather_data_api";

d3.json(url, function(response) {

  var markers=L.markerClusterGroup();

  console.log(response);


  for (var i=0; i<response.length;i++) {
    var location=response[i]

  
    markers.addLayer(L.marker([location.LATITUDE, location.LONGITUDE])
    .bindPopup("Year : "+ location.DATE +"<hr> Precipitation : "+ location.PRCP+"<hr>Average Temperature(°C) : " +location.TAVG+"<hr>Maximum Temperature(°C) : "+location.TMAX+"<hr>Minimum Temperature(°C) : "+location.TMIN));
  }
  
  myMap.addLayer(markers);



  
});

