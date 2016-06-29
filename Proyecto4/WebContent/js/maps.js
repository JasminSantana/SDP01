/**
google.maps.event.addDomListener(window,'load',function(){
	var map =new google.maps.Map(document.getElementById('map'),{
			zoom:5,
			center: new google.maps.LatLng(24, -102),
			mapTypeId:google.maps.MapTypeId.ROADMAP
		});
	
	var info=new google.maps.InfoWindow;
	var OnMarkerClick= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info.setContent('<h3>Quiroga </h3><img src="img/PO4_Quiroga.png"/>');
		info.open(map, marker);
	};
	google.maps.event.addListener(map, 'mouseout',function(){
		info.close();
});
	var iconMarker= new google.maps.MarkerImage('<img src="img/OilWell1.png/>');
	var marker=new google.maps.Marker({
		map:map,
		position:new google.maps.LatLng(25.3,-95.95),
		icon:iconMarker
	});
	
	google.maps.event.addListener(marker, 'click', onMarkerClick);
	
	
	
});*/

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
google.maps.event.addDomListener(window, 'load', 
function(){
	var directionsRerenderOptions = {
			markerOptions:{
			icon: new google.maps.MarkerImage("img/petroleo.gif")
	
			}};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	map=new google.maps.Map(document.getElementById('map'),{
		zoom:5,
		center: new google.maps.LatLng(19.430, -99.100),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});
	directionsDisplay.setMap(map);
		
/* VERACRUZ*/
var info2=new google.maps.InfoWindow;
var clickMarker2= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info2.setContent('<h3>Veracruz </h3><img src="img/Veracruzz.png"/>'+"<br /><br />"
			+"latitude and longitude"+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'
			+'<img src="img/gas1.PNG"/>' 
			+"<br /><br />"+
			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
	info2.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info2.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker2=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.18095,  -96.1429000),
	//icon:iconMarker
});
google.maps.event.addListener(marker2,'mouseover',clickMarker2);


/* TAMPICO*/

var info3=new google.maps.InfoWindow;
var clickMarker3= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info3.setContent('<h3>Tampico</h3><img src="img/tampicoo.jpg"/>'+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'
			+'<img src="img/gas1.PNG"/>' 
			+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx/tamaulipas/municipios/tampico//'>Link of site Tampico</a>");
	info3.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info3.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker3=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.1667, -97.6333),
	//icon:iconMarker
});
google.maps.event.addListener(marker3,'mouseover',clickMarker3);

/*Tamaulipas*/

var info4=new google.maps.InfoWindow;
var clickMarker4= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info4.setContent('<h3>TAMAULIPAS </h3><img src="img/tamaulipas.png"/>'+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx//'>Link of site TAMAULIAS</a>");
	info4.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info4.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker4=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(23.3557 , -99.1845),
	//icon:iconMarker
});
google.maps.event.addListener(marker4,'mouseover',clickMarker4);

/*CAMPECHE*/

var info5=new google.maps.InfoWindow;
var clickMarker5= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info5.setContent('<h3>CAMPECHE </h3><img src="img/campeche.png"/>'
			+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://campeche.gob.mx//'>Link of site Campeche</a>");
	info5.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info5.close();
});

var marker5=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.3500,-90.533330),
	
});
google.maps.event.addListener(marker5,'mouseover',clickMarker5);
/*Guadalajara*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>Guadalajara</h3><img src="img/guadalajara.png"/>'
			+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"+
			"<a href='http://portal.guadalajara.gob.mx//'>Link of site Guadalajara</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(20.6736, -103.344),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);

/*Aguascalientes*/
var info7=new google.maps.InfoWindow;
var clickMarker7= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info7.setContent('<h3>Aguascalientes</h3><img src="img/aguascalientes.png"/>'
			+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"
			+"type site: "+'<img src="img/Oil-Barrel-icon.png"'+"<br /><br />"+
			"<a href='http://aguascalientes.gob.mx//'>Link of site Aguascalientes</a>");
	info7.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info7.close();
});

var marker7=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.8833,  -102.283),
	
});
google.maps.event.addListener(marker7,'mouseover',clickMarker7);


/*Durango*/

var info8=new google.maps.InfoWindow;
var clickMarker8= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info8.setContent('<h3>Durango</h3><img src="img/durango.png"/>'+"<br /><br />"
			+"latitude and longitude "+latLng+"<br /><br />"+
			"type site: "+'<img src="img/Oil-Barrel-icon.png"'+"<br /><br />"+
			"<a href='http://durango.gob.mx//'>Link of site Durango</a>");
	info8.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info8.close();
});

var marker8=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(24.016666,  -104.650002),
	
});
google.maps.event.addListener(marker8,'mouseover',clickMarker8);



//Ciudad de Mexico
var info9=new google.maps.InfoWindow;
var clickMarker8= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info9.setContent('<h3>Mexico City</h3><img src="img/ciudadMexico.png"/>'+'<br/><br/>'
			+"latitude and longitude "+latLng+"<br /><br />"+
  "<a href='http://cdmx.gob.mx/'>Link of site Ciudad de Mexico</a>");
	info9.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info8.close();
});

var marker8=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.4978, -99.1269),
	
});
google.maps.event.addListener(marker8,'mouseover',clickMarker8);

//Monterrey	
var info1=new google.maps.InfoWindow;
var clickMarker1= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info1.setContent('<h3>Monterrey </h3><img src="img/gas2.PNG"/>'
			+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br />"+
			"<a href='http://monterrey.gob.mx/'>Link of site Monterrey</a>");
	info1.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info1.close();
});

var marker1=new google.maps.Marker({
	map:map,//elemento
	position:{lat: 25.6667, lng: -100.3167},//coordenadas 
//	icon:iconMarker
});
google.maps.event.addListener(marker1,'mouseover',clickMarker1);

//Hermosillo
var infoWindow5 = new google.maps.InfoWindow;
var onMarkerMouseOver = function() {
var latLng = this.getPosition();
infoWindow5.setContent('<h3>Hermosillo </h3><img src="img/gas2.PNG"/>'+"<br /><br />"+'Latitude= ' +
    latLng.lat() + '<br>Longitude= ' + latLng.lng()+"<br><br>"+"<a href='http://hermosillo.gob.mx/'</a>Link of site Hermosillo");
infoWindow5.open(map, this);
};
google.maps.event.addListener(map, 'mouseout', function() {
infoWindow5.close();
});


var mkr = new google.maps.Marker({
		draggable: true,
		icon : "img/gas2.PNG", 
		
		position:{lat: 29.0730 , lng: -110.9559 },
		map: map,
							
	});
google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);

/*San Luis Potosi*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>San Luis Potosì</h3><img src="img/OilWell1.png"/><img src="img/gas2.PNG"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://sanluispotosi.gob.mx//'>Link of site San Luis Potosi</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.2021, -101.0542),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);
/*Victoria*/
var info9=new google.maps.InfoWindow;
var clickMarker9= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info9.setContent('<h3>Ciudad Victoria </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
			+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
			"<a href='http://ciudadVictoria.gob.mx/'>Link of site Ciudad Victoria</a>");
	info9.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info9.close();
});

var marker9=new google.maps.Marker({
	map:map,//elemento
	position:{lat: 23.7369, lng: -99.141},//coordenadas 
//	icon:iconMarker
});
google.maps.event.addListener(marker9,'mouseover',clickMarker9);
//Matamros
var info10=new google.maps.InfoWindow;
	var clickMarker10= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info10.setContent('<h3>Matarmoros </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://monterrey.gob.mx/'>Link of site Matamoros</a>");
		info10.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info10.close();
	});

	var marker10=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 25.8690, lng: -97.5027},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker10,'mouseover',clickMarker10);



	//Acapulco
	var info11=new google.maps.InfoWindow;
	var clickMarker11= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info11.setContent('<h3>Acapulco </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
				+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
				"<a href='http://acapulco.gob.mx/'>Link of site Acapulco</a>");
		info11.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info11.close();
	});

	var marker11=new google.maps.Marker({
		map:map,//elemento
		position:{lat: 16.8636 , lng: -99.8825},//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker11,'mouseover',clickMarker11);
	
	 //Cancun
    var info13=new google.maps.InfoWindow;
var clickMarker13= function(){
var marker= this;
var latLng= marker.getPosition();
info13.setContent('<h3>Cancú </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
		+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng()+"<br /><br />"+
		"<a href='http://cancun.gob.mx/'>Link of site Cancún</a>");
info13.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
	info13.close();
});

var marker13=new google.maps.Marker({
map:map,//elemento
position:{lat: 21.1619, lng: -86.8515},//coordenadas 
//	icon:iconMarker
});
google.maps.event.addListener(marker13,'mouseover',clickMarker13);


//Arana
var info14=new google.maps.InfoWindow;
var clickMarker14= function(){
var marker= this;
var latLng= marker.getPosition();
info14.setContent('<h3>Arana </h3><img src="img/gas2.PNG"/><img src="img/OilWell1.png"/>'
		+"<br /><br />"+"Latitude "+latLng.lat()+"<br />Latitude "+latLng.lng());
info14.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
	info14.close();
});

var marker14=new google.maps.Marker({
map:map,//elemento
position:{lat: 26.3, lng: -93.95},//coordenadas 
//	icon:iconMarker
}); 
google.maps.event.addListener(marker14,'mouseover',clickMarker14);


//Quiroga
var infoWindow15 = new google.maps.InfoWindow;
    var onMarkerMouseOver = function() {
      var latLng = this.getPosition();
      infoWindow15.setContent('<h3>Quiroga </h3><br/> Latitude:'+latLng.lat() + '<br>Longitude= ' + latLng.lng());
      infoWindow15.open(map, this);
    };
    google.maps.event.addListener(map, 'mouseout', function() {
      infoWindow15.close();
    });
	

   var mkr = new google.maps.Marker({
			draggable: true,
			icon : "img/pozo.gif",
			
			position:{lat: 25, lng: -93.95},
			map: map
								
		});
    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);



    //Orizaba
var infoWindow16 = new google.maps.InfoWindow;
    var onMarkerMouseOver = function() {
      var latLng = this.getPosition();
      infoWindow16.setContent('<h3>Orizba</h3><br/> Latitude:'+latLng.lat() + '<br>Longitude= ' + latLng.lng());
      infoWindow16.open(map, this);
    };
    google.maps.event.addListener(map, 'mouseout', function() {
      infoWindow16.close();
    });
	

   var mkr = new google.maps.Marker({
			draggable: true,
			icon : "img/pozo.gif",
			
			position:{lat: 25.8, lng: -91.3167},
			map: map
								
		});
    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);


});/*CIERRE*/







var robots;
var cantr=0;


function handleDirectionsResponse(start,half, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
	var month = ((totalDistance/1000) /730)/0.1;
	if ((totalDistance/1000) <=403.2 ){
		robots = 1;
	}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
		robots = 2; 
	}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
		robots = 3;
	}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
		robots = 4;
	}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
		robots = 5;
	}
	
	document.getElementById("robot").innerHTML= robots;
	document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
	document.getElementById("meses").innerHTML= month.toFixed(2)/robots;
	
}
  }
function calcRoute(){
	var start = document.getElementById("start").value;
	var half= document.getElementById("half").value;
	var request = { origin: start, destination: half,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, half, directionsResult);
		}
	});
	
  }


//segunda distancia
var robots;
function handleDirectionsResponse1(half,end, directionsResults){
	directionsDisplay.setDirections(directionsResults);
	var route = directionsResults.routes;
	for(var ii=0; ii<route.length; ii++){
		var distanceTraveled = 0;
		var legs = route[ii].legs;
		for(jj=0; jj<legs.length; jj++){
			distanceTraveled += legs[jj].distance.value;
		}
		document.getElementById("distancee").innerHTML= Math.round(distanceTraveled/1000);
		
			
	var month = ((distanceTraveled/1000) /730)/0.1;

	if ((distanceTraveled/1000) <=403.2 ){
		robots = 1;

	}if ((distanceTraveled/1000) >403.2 && (distanceTraveled/1000)<=806.4){
		robots = 2; 

	}if ((distanceTraveled/1000) >806.4 && (distanceTraveled/1000)<=1209.6){
		robots = 3;
		
	}if ((distanceTraveled/1000) >1209.6 && (distanceTraveled/1000)<=1612.8){
		robots = 4;
		
	}if ((distanceTraveled/1000) >1612.8 && (distanceTraveled/1000)<=2016){
		robots = 5;
		
	}
	
	document.getElementById("robots").innerHTML= robots;
	document.getElementById("distancee").innerHTML=Math.round(distanceTraveled/1000);
	document.getElementById("meses1").innerHTML= month.toFixed(2)/robots;
	
	
}
}
	
///calula con el tercer lugar
  function calcRoutee(){
		
		var half= document.getElementById("half").value;
		var end = document.getElementById("end").value;
		var request = { origin: half, destination: end,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(directionsResults, status){
			if(status==google.maps.DirectionsStatus.OK){
				handleDirectionsResponse1(
						 half,end, directionsResults);
			}
		});
		
	  }

