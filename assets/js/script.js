// Variablees for search area
var searchBtn = $("#search-button");
var searchInputField = $("#input-text")[0];

// Variables for results/popular movies area
resultsDiv = $(".resultsDiv");

//Global variables
var favoriteList = [];
var currentSearch = "";
var newFavoriteID = "";



// Pulls a query of current popular movies from API
function startPage() {
    var apiKey = "76e9c110b6137a307950d97ef6abdeff"; 
    var requestURL = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1";

    fetch(requestURL)
        .then(function(response){
            if (response.ok) {
                 response.json().then(function(data) {
                    populatePopular(data);        
            // TODO: Add in other commands to do with our data
            
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


// Calls the API to display the main page cards with current popular movies
function populatePopular(data) {
    var cardCounter = 0;

    // TODO - Comment this section
    $(".card").each(function() {

        var posterPath = data.results[cardCounter].poster_path;
        var iconURL = "https://image.tmdb.org/t/p/original/" + posterPath;

        $(this).children(".card-img-top").attr("src", iconURL);
        $(this).children().children(".card-title").text(data.results[cardCounter].title);     
        $(this).children().children(".movie-desc").text(data.results[cardCounter].overview);
        $(this).children().children(".release-year").text(data.results[cardCounter].release_date);
        $(this).children().children(".movie-id").text(data.results[cardCounter].id);

        cardCounter++;
    })
}

// Calls the API to fetch data based on user search 
    // TODO: Add function to repopulate cards with API results
function getMovieAPI(currentSearch) {

    var apiKey = "76e9c110b6137a307950d97ef6abdeff"; 
    var requestURL = "https://api.themoviedb.org/3/search/movie?api_key=76e9c110b6137a307950d97ef6abdeff&query=" + currentSearch;
    
    fetch(requestURL)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data) {     
                    populateCards(data);     
            // TODO: Add in other commands to do with our data

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

function populateCards(data) {
    var cardCounter = 0;

    // TODO - Comment this section
    $(".card").each(function() {

        var posterPath = data.results[cardCounter].poster_path;
        var iconURL = "https://image.tmdb.org/t/p/original/" + posterPath;

        $(this).children(".card-img-top").attr("src", iconURL);
        $(this).children().children(".card-title").text(data.results[cardCounter].title);     
        $(this).children().children(".movie-desc").text(data.results[cardCounter].overview);
        $(this).children().children(".release-year").text(data.results[cardCounter].release_date);
        $(this).children().children(".movie-id").text(data.results[cardCounter].id);

        cardCounter++;
    })
}

// Checks if new favorite movie id is already in local storage and if not pushes it there	
function saveFavorite(newFavoriteID) {
    
    if (localStorage.getItem("favoriteList") !== null && favoriteList.length > 0) {
        favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    }
        
    if (!favoriteList.includes(newFavoriteID)) {
    // Adds movie to local storage array
        favoriteList.push(newFavoriteID);
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
                
    // If yes -- change the text on this button to Already in favorites
    }    
}



// Calls start function
startPage();

// Event listener for click on search button
searchBtn.click(function(event) {
    event.preventDefault();
    currentSearch = searchInputField.value;
    getMovieAPI(currentSearch);
    
    // Sets buttons to default text and color
    $(".favoriteButton").each(function(){
        $(this).text("Save movie");
        // $(this).attr()
    })
})


// Event listener on each card and send that movie's ID number to be saved in the next function
resultsDiv.click(function(event){
    newFavoriteID = $(event.target).closest(".text-center").siblings(".movie-id")[0].textContent;
    saveFavorite(newFavoriteID);
    // When save to favorites button is clicked button text and color change
    $(event.target).text("Saved to favorites");
    // $(event.target).attr("background-color", "red");
})
