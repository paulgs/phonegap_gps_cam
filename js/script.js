var serviceURL = "http://sacreddeer.herokuapp.com/deer/";

$("#sacreddeerListPage").bind("pageinit", function(event) {
	$("button").bind("click", function(e) {
        showGPS();
	});
});

function showGPS() {
    if(navigator.geolocation) {
        // This is the specific PhoneGap API call
        navigator.geolocation.getCurrentPosition(function(p) {
            // p is the object returned
            alert("Lat: " + p.coords.latitude+", Lng: " + p.coords.longitude)
            //mapPosition(p.coords.latitude, p.coords.longitude)
        }, function(error){
            alert("Failed to get GPS location");
        });
    } else {
        alert("Failed to get GPS working");
    }
}

function mapPosition(lat, lng){
    map.setView([lat, lng], map.getZoom());
}