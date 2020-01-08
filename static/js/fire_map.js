var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

var url = "/fires_2019_api";

d3.json(url, function(data) {

  // console.log(data);
  var markers=L.markerClusterGroup();

  // This is for heatmap
  var heatArray=[]



  for (var i=0; i<data.length; i++) {
    var location = data[i];
    var latitude = location.latitude;
    var longitude = location.longitude; 

    // This is for heatmap
    heatArray.push([latitude, longitude, 150.0])
  

  markers.addLayer(L.marker([latitude, longitude])
    .bindPopup("<h5> Fire name: "+location.name+"</h5> <hr> <h5> County: " +location.country+"</h5> <hr> <h5> Acres burned: " +location.acres + "</h5> <hr> <h5> State date: " +location.start + "</h5><hr> <h5> End date: " +location.end + "</h5>"));

  myMap.addLayer(markers);
}
  // console.log(heatArray);
  
  var heat = L.heatLayer(heatArray, {
    radius:50,
    blur:55
  }).addTo(myMap);

});