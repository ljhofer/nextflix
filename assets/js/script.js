// Variablees for search area
var searchBtn = $("#");
var searchInputField = $("#")[0];

// Variables for results/popular movies area
resultsDiv = $("");

//Global variables
var favoriteList = [];




// Start function
	// Pull popular query from API
	// Push content to cards

	
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
	// Check to see if title exists in local storage
		// If no, save movie title to JSON object of favorite movies 
		// If yes, link to favorites page

resultsDiv.click(function(event){
    // TODO: make this this event target works
    var newFavorite = event.target
    
    if (localStorage.getItem("favoriteList") !== null) {
        favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    }

    if (!previousCities.includes(currentSearch)) {
         // Adds movie to favorites
         previousCities.push(newFavorite);
         localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
     }

})
