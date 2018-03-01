var x = navigator.geolocation;

x.getCurrentPosition(success, failure);//pop up for allowing to continue

function success(position){
		//fetch coordinates
	var mylat = position.coords.latitude;
	var mylong = position.coords.longitude;
	// $('#lat').html(mylat);
	// $('#long').html(mylong);
   ///google -api-ready latitude and longitude string

var coords = new google.maps.LatLng(mylat, mylong);
	//setting up google map

var mapOptions =
{
	zoom:16,
	center: coords,
	mapTypeId: google.maps.MapTypeId.ROADMAP
} 

	//creating map

var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//create a marker

var marker = new google.maps.Marker({map:map,position:coords});

}

function failure(){
	$('#lat').html("<p> Something wen't wront!</p>");
}