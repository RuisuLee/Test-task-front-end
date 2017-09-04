var map;
		  var geocoder;
		  function initialize() {
		  	geocoder = new google.maps.Geocoder();
		    var latlng = new google.maps.LatLng(56.844249, 53.201262);
		    var mapOptions = {
		      zoom: 13,
		      center: latlng
		    }
		    map = new google.maps.Map(document.getElementById('map'), mapOptions);
		  }

		  function codeAddress(address) {
		    geocoder.geocode( { 'address': address}, function(results, status) {
		      if (status == 'OK') {
		        map.setCenter(results[0].geometry.location);
		        var marker = new google.maps.Marker({
		            map: map,
		            position: results[0].geometry.location
		        });
		      } else {
		        alert('Geocode was not successful for the following reason: ' + status);
		      }
		    });
		  }