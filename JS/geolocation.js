function myMap() {
	var home = {lat: 64.23, lng: 27.73};
	var mapProp= {center: home, zoom:7};
	var map=new google.maps.Map(document.getElementById('googleMap'),mapProp);
	var marker = new google.maps.Marker({ position: home, map: map});
}

