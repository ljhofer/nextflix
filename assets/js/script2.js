//  X   function start 
	//  X   Check for existing favorites from local storage
		//  X   Set global favorites variable === JSON parse local storage
		//  If yes, Populate card with local storage jsonparse
			//  Add cards dynamically -- iterate over the local storage array
		//  If no, change text content -- no favorites yet

//  event listener for click on re-movie 
//  remove movie title from local storage
	//  stringify 
	//  apply hide class

//Selectors

//Variables
var favoriteList = localStorage.getItem("favoriteList").JSON.parse();
console.log(favoriteList);

$(favoriteList).each(function(index){

})

function start() {

    //dynamically add each card

}

//  call start function here when you are done.
