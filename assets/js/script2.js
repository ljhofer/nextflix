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
var favoriteDiv = document.getElementById("favoritesDiv");
var favoriteDiv2 = $(".favoritesDiv");
//	This is broken 10/5/2021

//Variables
//	Getting favoriteList array from local storage
var favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
// console.log(favoriteList);
//	Defining api key
var apiKey = "76e9c110b6137a307950d97ef6abdeff";
//	Defining variable to build api url later
var requestURL;

//	Function

function start() {
	//	If favoriteList isn't empty and greater than 0 run do this
	if (favoriteList !== null && favoriteList.length > 0) {
    	//	 Loop through the array of favoriteList
		$(favoriteList).each(function(i) {
			//	Building url  for requestURL fix this var add newFavoriteId2 back in once fixed
			requestURL = "https://api.themoviedb.org/3/movie/" + favoriteList[i] + "?api_key=" + apiKey;
			//	Fetch requestURL
  			fetch(requestURL)
				.then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							//	Define data.poster_path
							var imgPosterPath = data.poster_path;
							//	Building url for data.poster_path img
							var imgForTemp = "https://image.tmdb.org/t/p/original/" + imgPosterPath;
							//	Insert data into template literal
								template = `
									<div class="card mt-4 mb-4" style="width: 18rem;">
										<img src=${imgForTemp} class="card-img-top"
											alt="Movie Poster" />
										<div class="card-body">
											<h5 class="card-title">${data.title}</h5>
											<p class="card-text release-year">${data.release_date}</p>
											<p class="card-text movie-desc">${data.overview}</p>
											<p class="movie-id">${data.id}</p>
											<div class="text-center">
												<a href="#" class="btn btn-primary favoriteButton" id="favoriteButton-1">Remove Favorite</a>
											</div>
										</div>
									</div>
								`;
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
		});
	}
};


//	Event listener for remove button
 favoriteDiv2.click(function (event) {
	var newFavoriteId2 = $(event.target).closest(".text-center").siblings(".movie-id")[0].textContent;
	console.log(newFavoriteId2);
	//	Remove from local storage
	//localStorage.removeItem(newFavoriteId2);
	var index = favoriteList.indexOf(newFavoriteId2);
	
	if (index > -1) {
		favoriteList.splice(index, 1)
	};
	localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
 	
	location.reload();
	return false;
 	});


//  Call start function here when you are done.
start();