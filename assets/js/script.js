// Variablees for search area
var searchBtn = $("#");
var searchInputField = $("#input-text")[0];

// Variables for results/popular movies area
resultsDiv = $(".resultsDiv");

//Global variables
var favoriteList = [];



// Pulls a query of current popular movies from API
function startPage() {
    var apiKey = "76e9c110b6137a307950d97ef6abdeff"; 
    var requestURL = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1";

    fetch(requestURL)
        .then(function(response){
            if (response.ok) {
                 response.json().then(function(data) {
                    console.log(data);  
                    // populatePopular(data);        
            // Add in other commands to do with our data
            
            })
      // Alerts user if there is an error or if their input is invalid    
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error){
            alert("Unable to connect to Nextflix");
        })
}

function populatePopular(data) {
    var cardCounter = 1;

    var iconCode = data.results[i].poster_path;
    var iconURL = "https://image.tmdb.org/t/p/original/" + iconCode + ".png";


    // Make sure these paths are correct
    resultsDiv.each(function() {
        $(this).children(".card-img-top").attr("src", iconURL);
        $(this).children().children(".card-title").text();     
        $(this).children().children(".release-year").text();




    // cardCounter ++ 
    })



}



	
// function getAPI

	//(code is in practice js file)//copy error text from homework
	// Call populateCards function pass data


// function populateCards
	// Create individual variables for data
	// Iterate over 4 existing cards to populate with fetch results
		// Title, year, overview

// function saveFavorites
	// Check for existing favorites from local storage
		// Set variable === JSON parse local storage
		// Stringify local storage


// Calls start function
startPage();

// Event listener for click on search button
searchBtn.click(function(event) {
    event.preventDefault();
    currentSearch = searchInputField.value;
    getAPI(currentSearch);
})


// Event listener on each card or on card div for click to add to favorites
resultsDiv.click(function(event){
    // TODO: make sure this event target works
    var newFavorite = event.target
    
    if (localStorage.getItem("favoriteList") !== null) {
        favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    }

    if (!favoriteList.includes(newFavorite)) {
         // Adds movie to favorites
         favoriteList.push(newFavorite);
         localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
     }
})
