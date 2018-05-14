
var map ;
function initMap(flightPlanCoordinates) {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: -19.931080, lng: -43.946792},
		mapTypeId: 'terrain'
	});

	/*var flightPlanCoordinates = [
		{lat: 37.772, lng: -122.214},
		{lat: 21.291, lng: -157.821},
		{lat: -18.142, lng: 178.431},
		{lat: -27.467, lng: 153.027}
	];

	var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	flightPath.setMap(map);*/
}	

//'use strict';



var ref = new Firebase('https://tracker-d7ad1.firebaseio.com/tracked-devices/motorolaMB525-c579924f5d31d977');


// Attach an asynchronous callback to read the data at our posts reference
ref.limitToLast(1000).on("value", function(snapshot) {
	
	var tracks = snapshot.val().tracks;
	//var flightPlanCoordinates = [];

	for(var id in tracks) {

		/*flightPlanCoordinates.push(
		{
			lat: tracks[id].location.latitude,
			lng: tracks[id].location.longitude
		});*/

	    var cityCircle = new google.maps.Circle({
	      strokeColor: '#FF0000',
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: '#FF0000',
	      fillOpacity: 0.35,
	      map: map,
	      center: {
	      	lat: tracks[id].location.latitude,
			lng: tracks[id].location.longitude
		  },
	      radius: 2
	    });		

	}

	/*var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	flightPath.setMap(map);	*/

}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});

