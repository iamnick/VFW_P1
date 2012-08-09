// Nick Stelzer
// VFW 1208 - Project 2
// August 8, 2012

// Waits until DOM is ready
window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}

	// Variable defaults
	var travelMethods = ["Plane", "Train", "Car"];
	
	
	// Set Link & Submit Click Events
	var viewLink = $('viewAllTrips');
	viewLink.addEventListener("click", getData);
	var clearLink = $('clearTrips');
	clearLink.addEventListener("click", clearData);
	var addTrip = $('addTrip');
	addTrip.addEventListener("click", storeData);
	
	
});