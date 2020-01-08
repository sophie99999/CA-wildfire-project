var markers2019 = [];
var markers2018 = [];
var markers2017 = [];
var markers2016 = [];
var markers2015 = [];
var markers2014 = [];

var heatArray = [];

var url = "/fires_complete_api"

d3.json(url, function(locations) {
  for (var i = 0; i < locations.length; i++) {
    var year = locations[i].year;

    if (year == '2019') {
      var coordinates = [locations[i].latitude, locations[i].longitude];

      markers2019.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
      )

      heatArray.push([locations[i].latitude, locations[i].longitude, 1.0]);
    }

    else if (year == '2018') {
      var coordinates = [locations[i].latitude, locations[i].longitude];
      markers2018.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
      )

      heatArray.push([locations[i].latitude, locations[i].longitude, 1.0]);
    }

    else if (year == '2017') {
      var coordinates = [locations[i].latitude, locations[i].longitude];
      markers2017.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
      )

      heatArray.push([locations[i].latitude, locations[i].longitude, 1.0]);
    }

    else if (year == '2016') {
      var coordinates = [locations[i].latitude, locations[i].longitude];
      markers2016.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
      )

      heatArray.push([locations[i].latitude, locations[i].longitude, 1.0]);
    }

    else if (year == '2015') {
      var coordinates = [locations[i].latitude, locations[i].longitude];
      markers2015.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
      )

      heatArray.push([locations[i].latitude, locations[i].longitude, 1.0]);   
    }

    else if (year == '2014') {
      var coordinates = [locations[i].latitude, locations[i].longitude];
      markers2014.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "orange",
          fillColor: "orange",
          radius: locations[i].acres / 2
        }).bindPopup("<h5> Fire name: "+locations[i].name+"</h5> <hr> <h5> County: " + locations[i].country+ "</h5> <hr> <h5> Acres burned: " +locations[i].acres + "</h5> <hr> <h5> State date: " +locations[i].start + "</h5><hr> <h5> End date: " +locations[i].end + "</h5>")
         )
      heatArray.push(coordinates)
      }
    }  
    
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  var markerGroup2014 = L.layerGroup(markers2014);
  var markerGroup2015 = L.layerGroup(markers2015);
  var markerGroup2016 = L.layerGroup(markers2016);
  var markerGroup2017 = L.layerGroup(markers2017);
  var markerGroup2018 = L.layerGroup(markers2018);
  var markerGroup2019 = L.layerGroup(markers2019);

  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  }

  var overlayMaps = {
    "2019": markerGroup2019,
    "2018": markerGroup2018,
    "2017": markerGroup2017,
    "2016": markerGroup2016,
    "2015": markerGroup2015,
    "2014": markerGroup2014
  };

  myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5,
    layers: [darkmap, markerGroup2014]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

});
