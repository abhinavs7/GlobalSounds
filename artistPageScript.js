
$(document).ready()



var urlParams = new URLSearchParams(window.location.search);

var artist = urlParams.get('artist');
$("#heading").html("<h2><strong>"+artist+"</strong></h2>");
console.log(artist);

var artistQueryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+
artist+"&api_key= 32a9db80bc64463d6bbf529e71003b2c&format=json";
console.log(artistQueryURL);
$.ajax({
url: artistQueryURL,
method: "GET"
})
.then(function(artistResponse) {
   $("#bio").append("<p>"+artistResponse.artist.bio.summary+"</p>");
   console.log(artistResponse);
   console.log(artistResponse.artist.tags.tag[0]);
   console.log(artistResponse.artist.similar.artist[0].image[0]);
   for(var i=0;i<5;i++){
    var tagLink = $("<a>");
    tagLink.attr("href",artistResponse.artist.tags.tag[i].url);
    tagLink.attr('title',artistResponse.artist.tags.tag[i].name);
    tagLink.attr('target','_blank');
    tagLink.text(artistResponse.artist.tags.tag[i].name);
    tagLink.addClass('tagLink');

    var similarDiv = $("<div>");
    similarDiv.addClass("similarArtist");
    //similarDiv.html("<h5>"+artistResponse.artist.similar.artist[i].name+"</h5>");

    var simLink = $("<a>");
    simLink.attr("href",artistResponse.artist.similar.artist[i].url);
    simLink.attr('title',artistResponse.artist.similar.artist[i].name);
    simLink.attr('target','_blank');
    simLink.text(artistResponse.artist.similar.artist[i].name);
    simLink.addClass('similarLink');
    

    var similarImg = $("<img>");
    similarImg.addClass('similarImage');
    similarImg.attr('src',artistResponse.artist.similar.artist[i].image[0]);
    similarDiv.append(similarImg);
    similarDiv.append(simLink);
    
    
    $("#tags").append(tagLink);
    $("#tags").append(" | ");
    $("#suggestions").append(similarDiv);
 
   }
  

});

var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="
            +artist+"&key=AIzaSyC3e0VoI78wamBroxN91-tKo_MvglEUAKQ";
console.log(queryURL);
var videoURL = "https://www.youtube.com/watch?v=";
$.ajax({
url: queryURL,
method: "GET"
})
.then(function(response) {
    console.log(response);
  var results = response.items;
  //$("#results").append(JSON.stringify(results));
    console.log(results);
   for (var i = 0; i < results.length; i++) {
     var videoDiv = $("<div>");
        videoDiv.addClass('video');
     var videoId = results[i].id.videoId;
    var videoLink = videoURL+videoId;
    var videoTitle = results[i].snippet.title;
    var imgUrl = results[i].snippet.thumbnails.default.url;
     var link = $("<a>");
        link.attr("href",videoLink);
        link.attr('title',videoTitle);
        link.attr('target','_blank');
        link.text(videoTitle);
        link.addClass('link');

        var thumbnail = $('<img>');
        thumbnail.addClass('thumbnails');
        thumbnail.attr("href",videoLink);
        thumbnail.attr("src",imgUrl);
     
     videoDiv.append(thumbnail);
     videoDiv.append(link);

     $("#results").append(videoDiv);

   }
  })

