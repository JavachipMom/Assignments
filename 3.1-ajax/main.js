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
  var MovieTitleHTML = "<h2 class='title'>";
  MovieTitleHTML += JSONData.Title;
  MovieTitleHTML += "</h2>";
movieSelectionElement.innerHTML += MovieTitleHTML;
// I have my poster image here
  var MoviePosterHTML = "<img class='poster' src='";
  MoviePosterHTML += JSONData.Poster;
  MoviePosterHTML += "'>";
movieSelectionElement.innerHTML += MoviePosterHTML;
  var MovieActorsHTML = "<h3>";
  MovieActorsHTML += "Actors: " + JSONData.Actors;
  MovieActorsHTML += "</h3>";
movieSelectionElement.innerHTML += MovieActorsHTML;
  var MovieRatedHTML = "<h3>";
  MovieRatedHTML += "Rated: " + JSONData.Rated;
  MovieRatedHTML += "</h3>";
movieSelectionElement.innerHTML += MovieRatedHTML;
  var MovieGenreHTML = "<h3>";
  MovieGenreHTML += "Genre: " + JSONData.Genre;
  MovieGenreHTML += "</h3>";
movieSelectionElement.innerHTML += MovieGenreHTML;
  var MovieYearHTML = "<h3>";
  MovieYearHTML += "Year Created: " + JSONData.Year;
  MovieYearHTML += "</h3>";
movieSelectionElement.innerHTML += MovieYearHTML;
  var MoviePlotHTML = "<h3 class='textPlot'>";
  MoviePlotHTML += "Plot: " + JSONData.Plot;
  MoviePlotHTML += "</h3>";
movieSelectionElement.innerHTML += MoviePlotHTML;
  var MovietotalSeasonsHTML = "<h4 class='seasonTotal'>";
  MovietotalSeasonsHTML += "Total Seasons: " + JSONData.totalSeasons;
  MovietotalSeasonsHTML += "</h4>";
movieSelectionElement.innerHTML += MovietotalSeasonsHTML;
// console.log(MovietotalSeasonsHTML); had to fix my spelling from TotalSeasons to TotalSeasons
  })
  xhr.send();
})
