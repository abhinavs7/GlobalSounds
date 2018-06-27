  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBk2E-sl-lDdc5sBCNvLn8p1zBVcELoJ7I",
    authDomain: "globalmusicsearch.firebaseapp.com",
    databaseURL: "https://globalmusicsearch.firebaseio.com",
    projectId: "globalmusicsearch",
    storageBucket: "globalmusicsearch.appspot.com",
    messagingSenderId: "958799204537"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

var music = {
     searchCountry : "",
    searchArtist: "",

    search:function(country){
        var searchResults;
        console.log(country);
        database.ref("Countries").orderByKey().equalTo(country).on("value",function(childSnapshot) {

       // database.ref(country).orderByKey().equalTo(country).on("value",function(childSnapshot) {
            console.log(childSnapshot.val());
            console.log(childSnapshot.key);
             searchResults = childSnapshot.val();
             searchKey = childSnapshot.key;
             music.renderSearchResults(searchResults,country);      
                    })

             
    },

    renderSearchResults: function(searchResults, country){
        $("#results").html("");
        var artistData = searchResults[country];
        console.log(searchResults[country]);
                var url = "artistInfo.html?artist=";
                $("#results").append("<h2>Artists: </h2>");
                $("#results").append("<div class='artistlist'><p><a target='_blank' href="+encodeURI(url+artistData.Artist1)+">♫ "+artistData.Artist1+"</a></p></div>");
                $("#results").append("<div class='artistlist'><p><a target='_blank' href="+encodeURI(url+artistData.Artist2)+">♫ "+artistData.Artist2+"</a></p></div>");
                $("#results").append("<div class='artistlist'><p><a target='_blank' href="+encodeURI(url+artistData.Artist3)+">♫ "+artistData.Artist3+"</a></p></div>");
                $("#results").append("<div class='artistlist'><p><a target='_blank' href="+encodeURI(url+artistData.Artist4)+">♫ "+artistData.Artist4+"</a></p></div>");
                $("#results").append("<div class='artistlist'><p><a target='_blank' href="+encodeURI(url+artistData.Artist5)+">♫ "+artistData.Artist5+"</a></p></div>");

     

    }

}

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    music.searchCountry=$("#query").val().trim().toUpperCase();
    music.search(music.searchCountry);
    $("#query").val("");
}, false);

