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
	
	function storeData() {
		var id = Math.floor(Math.random()*1000000);
		
		// Gather data from form field, store in object
		// Object properties contain array with form label and input value
		var trip = {};
			trip.method = ["Travel Method: ", $(travelMethod).value];
			trip.type = ["Trip Type: ", tripType];
			trip.dest = ["Destination: ", $(dest).value];
			trip.date = ["Date: ", $(date).value];
			trip.people = ["Number of People: ", $(numPeople).value];
			trip.notes = ["Notes: ", $(notes).value];
			
		// Save data into local storage, use Stringify to convert object to string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Trip Saved!");
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