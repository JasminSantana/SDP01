/**
 *Script para la inclusion de mapas de google y su manejo. 
 */

function initialize(){
	//colocar la longitud y latitud iniciales.
	//Nos ubicaremos en lat long par la Ciudad de México: (19.4300, -99.1000)
	var latlang = new google.maps.LatLng(24.00, -102.6);
	var myOptions = {
			//Colocar factor de zoom.
			zoom: 5,
			center: latlang,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),myOptions);
}