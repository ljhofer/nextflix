//  X   function start
//  X   Check for existing favorites from local storage
//  X   Set global favorites variable === JSON parse local storage
//  If yes, Populate card with local storage jsonparse
//  Add cards dynamically -- iterate over the local storage array
//  If no, change text content -- no favorites yet

//	I need a way to get the data for each movie from the api or when I save the movie title am I saving all of its object data?

//  X	event listener for click on re-movie
//  X	remove movie title from local storage
//  X	stringify
//  X	apply hide class

//	create loop
//	fetching data
//	insert data into template
//	have one single source of truth/string for all cards
//	dynamically create card in html

//Selectors

//Variables
var favoriteList = localStorage.getItem("favoriteList");

var apiKey = "76e9c110b6137a307950d97ef6abdeff";

var newFavoriteId2; //gotta update this

var requestURL;

/*
var template = `
<div class="card" style="width: 18rem;">
	<img src="https:${data.results[i].poster_path}" class="card-img-top" alt="Fight Club movie poster used as a placeholder">
	<div class="card-body">
 		<h5 class="card-title">${data.results[i].title}</h5>
  		<p class="card-text">${data.results[i].overview}</p>
  		<a href="#" class="btn btn-primary">Save movie</a>
	</div>
</div> 
`;
*/

//	Checking to see if I am getting favoriteList back from local storage

//	Function

function start() {
  if (favoriteList !== null && favoriteList.length > 0) {
	console.log(favoriteList);
	console.log(favoriteList.length);
	//defining the id
	newFavoriteId2 = favoriteList[1];

	requestURL = "https://api.themoviedb.org/3/movie/" + newFavoriteId2 + "?api_key=" + apiKey;

	console.log(requestURL);

    // loop through the array of favoriteList

	//$(favoriteList).each(function () {
  	fetch(requestURL)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
				// can we call a function to generate cards here 
				// Add in other commands to do with our data
				});
				// Alerts user if there is an error or if their input is invalid
			} else {
				alert("Error: " + response.statusText);
			}
		})
		.catch(function (error) {
			alert("Unable to connect to Nextflix");
		});
	//});
  }
}

/*
//event listener
$("target").click(function () {
  //stringify what we are removing
  $("target").json.stringify();
  //remove from local storage
  localStorage.removeItem("target");
  //apply hidden class to the card
  $("target").addClass("hidden");
});
*/

//  call start function here when you are done.
start();