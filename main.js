/* Scroll */

    $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

/* map */
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#B1E5E1'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5482AB'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#B1E5E1'}]
            }
          ]
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Villamartin', 37.941381, -0.759062], 
        ['Campoamor', 37.929355, -0.779997],
        ['Las Ramblas', 37.916486, -0.772567],
        ['Las Colinas', 37.93291, -0.809931],
        ['La Marquesa', 38.084163, -0.708458],
        ['La Finca', 38.057655, -0.797132],
        ['Vistabella', 38.036908, -0.823524],
        ['Roda', 37.768635, -0.852433],
        ['Lo Romero', 37.882799, -0.823643],
        ['La Serena', 37.728443, -0.869256],
        ['Mar Menor', 37.791848, -0.974736],
        ['Saurines de la Torre', 37.791848, -0.974736],
        ['La Paraleja', 37.880064, -0.956291],
        ['El Valle', 37.879824, -1.083202],
        ['La Manga', 37.604215, -0.802852],
        ['Hacienda Del Alamo', 37.749824, -1.196228], 
        ['Lorca', 37.548766, -1.627798],
        ['La Torre', 37.823266, -1.001998], 
        ['Hacienda Riquelme', 37.894100, -0.968643],
        ['Font Del Llop', 38.330705, -0.700207],
        ['Alenda', 38.359144, -0.672135],
        ['El Plantio', 38.31341, -0.547943],
        ['Alicante', 38.375018, -0.420841],
        ['Bonalba', 38.443413, -0.432147]
        /*['Casa hundratolv', 37.929654, -0.733279]*/
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Villamartin</h3>' +
        '<p>Telefonnummer +34 966 765 170</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Campoamor</h3>' +
        '<p>Telefonnummer +34 965 321 366</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Las Ramblas</h3>' +
        '<p>Telefonnummer +34 966 774 728</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Las Colinas</h3>' +
        '<p>Telefonnummer +34 965 324 224</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Marquesa</h3>' +
        '<p>Telefonnummer +34 966 714 258</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Finca</h3>' +
        '<p>Telefonnummer +34 966 729 010</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Vistabella</h3>' +
        '<p>Telefonnummer +34 966 107 846</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Roda</h3>' +
        '<p>Telefonnummer +34 968 173 093</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lo Romero</h3>' +
        '<p>Telefonnummer +34 902 180 918</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Serena</h3>' +
        '<p>Telefonnummer +34 968 575 576</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Mar Menor</h3>' +
        '<p>Telefonnummer +34 968 041 842</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Saurines de la Torre</h3>' +
        '<p>Telefonnummer +34 968 041 842</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Paraleja</h3>' +
        '<p>Telefonnummer +34 902 201 207</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>El Valle</h3>' +
        '<p>Telefonnummer +34 968 033 002</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Manga</h3>' +
        '<p>Telefonnummer +34 968 331 234</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hacienda Del Alamo</h3>' +
        '<p>Telefonnummer +34 968 157 236</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lorca</h3>' +
        '<p>Telefonnummer +34 968 113 535</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>La Torre</h3>' +
        '<p>Telefonnummer +34 966 704 752</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hacienda Riquelme</h3>' +
        '<p>Telefonnummer +34 968 038 050</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Font Del Llop</h3>' +
        '<p>Telefonnummer +34 966 126 767</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Alenda</h3>' +
        '<p>Telefonnummer +34 965 620 521</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>El Plantio</h3>' +
        '<p>Telefonnummer +34 965 189 115</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Alicante</h3>' +
        '<p>Telefonnummer +34 965 153 794</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Bonalba</h3>' +
        '<p>Telefonnummer +34 965 955 955</p>' +
        '</div>']
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    var marker;
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }
    
    // Place home marker
    var homePos = new google.maps.LatLng(37.928857, -0.733963);
    var homeMarker = new google.maps.Marker({
        position: homePos,
        map: map,
        title: "Home",
        icon: "Images/house.png"
    });

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(9);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);

/* Sidenav */

function openNav() {
    document.getElementById("sideNavigation").style.width = "220px";
    document.getElementsById("content").style.marginLeft = "220px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementsById("content").style.marginLeft = "0";
}
