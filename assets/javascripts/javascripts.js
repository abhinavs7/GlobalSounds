
    console.log(countryData)
    console.log(memberData)

    function openPage(pageName, elmnt, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
    }
    function initMap() {
        // The location of Uluru (Pierre)
        // var uluru = [
        //      pierre {lat:46.932008, lng:2.625380},
        //      abhinav{lat:23.546223, lng:78.356123},
        //     Tashi {lat: 44.595297 , lng: -92.814127 },
        //      Gamme { lat:31.760830, lng: 88.246217},
        //     Minn {lat: 44.0333 , lng: -93.3153}
        // ]
        var pierre = { lat: 46.932008, lng: 2.625380 };
        //abhinav=    {lat:23.546223,     lng:78.356123};
        // tashi =     {lat: 44.595297 ,   lng: -92.814127};
        /// gamme =     {lat:9.123882,     lng: 39.158560};
        //minn =      {lat: 48.0333 ,     lng: -98.3153};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 1.75, center: pierre });
        // The marker, positioned at Uluru
        for (var i = 0; i < countryData.length; i++) {
            new google.maps.Marker({ position: { lat: +countryData[i].lat, lng: +countryData[i].lng }, map: map })
        }
        // var marker = new google.maps.Marker({position: pierre, map: map});
        // var marker = new google.maps.Marker({position: abhinav, map: map});
        // var marker = new google.maps.Marker({position: tashi, map: map});
        //var marker = new google.maps.Marker({position: gamme, map: map});
        // var marker = new google.maps.Marker({position: minn, map: map});
        //var map2 = new google.maps.Map(
        //document.getElementById('map2'), {zoom: 2, center: pierre}
        //);
    }
    function initMap2() {
        // The location of Uluru (Pierre)
        // var uluru = [
        // pierre {lat:46.932008, lng:2.625380},
        //      abhinav{lat:23.546223, lng:78.356123},
        //     Tashi {lat: 44.595297 , lng: -92.814127 },
        //      Gamme { lat:31.760830, lng: 88.246217},
        //     Minn {lat: 44.0333 , lng: -93.3153}
        //]
        var MemberData;
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('GoogleMap2'), { zoom: 5, center: pierre });
        // The marker, positioned at Uluru
        for (var j = 0; j < memberData.length; j++) {
        var marker= new google.maps.Marker({ position: {lat: +memberData[j].lat, lng: +memberData[j].lgn }, center: pierre, map: GoogleMap2 });
        }
        //var marker = new google.maps.Marker({position: abhinav, map: map});
        //var marker = new google.maps.Marker({position: tashi, map: map});
        // var marker = new google.maps.Marker({position: gamme, map: map});
        //var marker = new google.maps.Marker({position: minn, map: map});

    }
    // script load buttons
    $(document).ready(function () {
        // initMap2()
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
        // script loads the map in the id #map-view and position it as a word map.
        // Initialize and add the map
    })
