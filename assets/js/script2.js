//Variables
//	Getting favoriteList array from local storage
var favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
//	Defining variable to build api url later
var requestURL;
//	Defining variable for selecting favoritesDiv id
var favoriteDiv = document.getElementById("favoritesDiv");
//	Defining a variable for favoritesDiv class
var favoriteDiv2 = $(".favoritesDiv");
//	Functions
function start() {
	//	If favoriteList isn't empty and greater than 0 run do this
	if (favoriteList !== null && favoriteList.length > 0) {
    	//	 Loop through the array of favoriteList
		$(favoriteList).each(function(i) {
			//	Building url  for requestURL fix this var add newFavoriteId2 back in once fixed
			requestURL = "https://api.themoviedb.org/3/movie/" + favoriteList[i] + "?api_key=76e9c110b6137a307950d97ef6abdeff";
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
									<img src="${imgForTemp}" class="card-img-top" alt="Movie poster" />
									<div class="card-body">
										<h5 class="card-title mt-3 mb-3">${data.title}</h5>
										<p class="card-text release-year mb-3">${data.release_date}</p>
										<p class="card-text movie-desc mb-3">${data.overview}</p>
										<p class="movie-id">${data.id}</p>
										<div class="text-center">
										<a href="#" class="btn btn-primary favoriteButton" id="favoriteButton-1">Remove Favorite</a>
										</div>
									</div>
								</div>
								`;
								//	Inserting template into favorites.html
								favoriteDiv.insertAdjacentHTML("beforeend", template);
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
	var index = favoriteList.indexOf(newFavoriteId2);
	if (index > -1) {
		favoriteList.splice(index, 1)
	};
	localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
	location.reload();
	return false;
});
//	Calls
start();