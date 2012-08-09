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
	
	// Create select field (dropdown list) element and populate with options
	function createTravelMethodList () {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "travelMethod");
		
		for( var i = 0, j=travelMethods.length; i < j; i++) {
			var makeOption = document.createElement('option');
			var optText = travelMethods[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	// Variable defaults
	var travelMethods = ["Plane", "Train", "Car"];
	createTravelMethodList();
	
	// Set Link & Submit Click Events
	var viewLink = $('viewAllTrips');
	viewLink.addEventListener("click", getData);
	var clearLink = $('clearTrips');
	clearLink.addEventListener("click", clearData);
	var addTrip = $('addTrip');
	addTrip.addEventListener("click", storeData);

});

/*
						<select id="travelMethod">
							<option value="Plane">Plane</option>
							<option value="Train">Train</option>
							<option value="Car">Car</option>
						</select>
*/