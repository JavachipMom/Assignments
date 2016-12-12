document.addEventListener("DOMContentLoaded", function(){
  var movieSelectionElement = document.querySelector("[data-js='movies']");

   var xhr = new XMLHttpRequest();

   xhr.open("GET","http://www.omdbapi.com/?t=paw+patrol&y=&plot=short&r=json");
// console.log(xhr);
  xhr.addEventListener("load", function(e){
  var xhrData = this.response;

  var JSONData = JSON.parse(xhrData);
  console.log(JSONData);
  // I am creating my Title for my page
  var MovieTitleHTML = "<h2>";
  MovieTitleHTML += JSONData.Title;
  MovieTitleHTML += "</h2>";
movieSelectionElement.innerHTML += MovieTitleHTML;
// I have my poster image here
  var MoviePosterHTML = "<img src='";
  MoviePosterHTML += JSONData.Poster;
  MoviePosterHTML += "'>";
movieSelectionElement.innerHTML += MoviePosterHTML;
  })
  xhr.send();
})
