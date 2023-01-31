const movieButton = document.getElementById("btn1");
var listMovies = [];

function createMovie() {

  var movieName = document.getElementById("name").value;
  var movieDuration = document.getElementById("duration").value;
  var movieGenre = document.getElementById("genre").value;

  if (!movieName || !movieDuration || !movieGenre) {
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = "Please fill out all form fields";
    errorMessage.style.color = "red";
    document.getElementById("movie-form").prepend(errorMessage);
    return;
  }

  const movie = new Movie(movieName, movieDuration, movieGenre);
  listMovies.push(movie);
  const movieData = document.createElement("div");
  movieData.innerHTML = movie.getData();
  document.getElementById("movie-form").appendChild(movieData);
  
  (function () {
    document.getElementById("name").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("genre").value = "-";
  })();
}
movieButton.addEventListener("click", createMovie);
/////////////////////////////////////////////////////////////////////////////////////////////////////
const movieButton2 = document.getElementById("btn2");

function createProgram() {
  const date = document.getElementById("choseDate").value;

  const movieProg = document.createElement("div");
  movieProg.innerHTML = `*${date}, ${listMovies.length} movies`
  document.getElementById("newProgram").appendChild(movieProg);

}
movieButton2.addEventListener("click", createProgram);
