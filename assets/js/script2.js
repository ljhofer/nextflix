//  X   Check for existing favorites from local storage
//  X   Set global favorites variable === JSON parse local storage
//  If yes, Populate card with local storage jsonparse
//  Add cards dynamically -- iterate over the local storage array
//  If no, change text content -- no favorites yet

//  X	Event listener for click on re-movie
//  X	Remove movie title from local storage
//  X	Stringify
//  X	Apply hide class

//	Create loop
//	X	fetching data
//	X	Use loop to make template literal of data
//	X	Have one single source of truth/string for all cards

//	Selector
var favoriteDiv = $(".container-fluid");
//	This is broken 10/5/2021

//Variables
//	Getting favoriteList array from local storage
var favoriteList = localStorage.getItem("favoriteList");
//	Defining api key
var apiKey = "76e9c110b6137a307950d97ef6abdeff";
//	Defining a variable for start() function
var newFavoriteId2; //gotta update this
//	Defining variable to build api url later
var requestURL;
/*
//	Defining a var to use template literal
var template = `
	<div class="card mt-4 mb-4" style="width: 18rem;">
    	<img src=${data.results[index]} class="card-img-top"
        	alt="placeholder alt" />
    	<div class="card-body">
    		<h5 class="card-title">${data.results[index].title}</h5>
    		<p class="card-text release-year">${data.results[index].release_date}</p>
        	<p class="card-text movie-desc">${data.results[index].overview}</p>
            <p class="movie-id"></p>
            <div class="text-center">
            	//<a href="#" class="btn btn-primary favoriteButton" id="favoriteButton-1">Save movie</a>	change this button to a remove movie if we have time.
            </div>
        </div>
    </div>
`;
*/

//	Function

function start() {
	//	If favoriteList isn't empty and greater than 0 run do this
	if (favoriteList !== null && favoriteList.length > 0) {
		console.log(favoriteList);
		//	Defining newFavoriteId2 for an index value of favoriteList
		newFavoriteId2 = favoriteList[1];
		//	Building url  for requestURL fix this var add newFavoriteId2 back in once fixed
		requestURL = "https://api.themoviedb.org/3/movie/550988?api_key=" + apiKey;
		console.log(requestURL);
    	//	 Loop through the array of favoriteList
		//$(favoriteList).each(function() {
			//	Fetch requestURL
  			fetch(requestURL)
				.then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							//	Logging to check if data has these values
							console.log(data);
							console.log(data.poster_path)
							console.log(data.title);
							console.log(data.release_date);
							console.log(data.overview);
							//	Define data.poster_path
							var imgPosterPath = data.poster_path;
							//	Building url for data.poster_path img
							var imgForTemp = "https://image.tmdb.org/t/p/original/" + imgPosterPath;
							//	Insert data into template literal
								template = `
									<div class="card mt-4 mb-4" style="width: 18rem;">
										<img src=${imgForTemp} class="card-img-top"
											alt="placeholder alt" />
										<div class="card-body">
											<h5 class="card-title">${data.title}</h5>
											<p class="card-text release-year">${data.release_date}</p>
											<p class="card-text movie-desc">${data.overview}</p>
											<p class="movie-id"></p>
											<div class="text-center">
												//<a href="#" class="btn btn-primary favoriteButton" id="favoriteButton-1">Save movie</a>	change this button to a remove movie if we have time.
											</div>
										</div>
									</div>
								`;
								console.log(template);
								//	Append template into favorites.html inside favoritesDiv
								favoriteDiv.insertAdjacentHTML("beforeend", template);
							//	Add in other commands to do with our data
						});
					//	Alerts user if there is an error or if their input is invalid
					} else {
						alert("Error: " + response.statusText);
					}
				})
					.catch(function (error) {
						alert("Unable to connect to Nextflix");
					});
		//});
	}
};

/*
//	Event listener for remove button
$("target").click(function () {
	//	Stringify what we are removing
	$("target").json.stringify();
	//	Remove from local storage
	localStorage.removeItem("target");
	//	Apply hidden class to the card
	$("target").addClass("hidden");
});
*/

//  Call start function here when you are done.
start();