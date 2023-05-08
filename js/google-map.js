function initMap() {

    var mapOptions = {
      zoom: 16,         
      center: {      
        lat: 7.8473284,
        lng: 98.38230879999992
      },
      activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      disableDefaultUI:true,
	    allowZoomOnScroll:false,
      markers:[{
        position: {lat:7.8473284, lng:98.38230879999992},
        name:'ThaiDive',
        description:'This is marker description',
        address: '6/86 Moo 8, T. Vichit, A. Muang, Phuket,  Thailand, 83000',
        }],
    };
    
    var blackIcon = {
        url: './images/pin.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16)
      };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapOptions.zoom,
        center: mapOptions.center,
        disableDefaultUI: mapOptions.disableDefaultUI,
        scrollwheel: !mapOptions.allowZoomOnScroll
      });
    
      var marker = new google.maps.Marker({
        position: mapOptions.markers[0].position,
        map: map,
        title: mapOptions.markers[0].name,
        icon: blackIcon       
      });
    
      var infowindow = new google.maps.InfoWindow({
        content: '<div><h3>' + mapOptions.markers[0].name + '</h3>' +
                 '<p>' + mapOptions.markers[0].description + '</p>' +
                 '<p>' + mapOptions.markers[0].address + '</p></div>'
      });
    
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

  }