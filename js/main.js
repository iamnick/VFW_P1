// Nick Stelzer
// VFW 1208 - Project 2
// August 9, 2012

// Waits until DOM is ready
window.addEventListener("DOMContentLoaded", function () {

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
		
		for (var i = 0, j=travelMethods.length; i < j; i++) {
			var makeOption = document.createElement('option');
			var optText = travelMethods[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	// Find value of selected Trip Type radio button
	function getTripType () {
		var radios = document.forms[0].tripType;

		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				tripTypeValue = radios[i].value;
			}
		}
	}
	
	// Hides/shows elements based on the link you click
	function toggleDisplay (onOff) {
		switch (onOff) {
			case "on":
				$('addTripForm').style.display = "none";
				$('viewAllTrips').style.display = "none";
				$('addNewTrip').style.display = "inline";
				break;
			case "off":
				$('addTripForm').style.display = "block";
				$('viewAllTrips').style.display = "inline";
				$('addNewTrip').style.display = "none";
				$('savedTrips').style.display = "none";
				break;
			default:
				return false;
		}
	} 
	
	// Updates the span tag showing value of slider
	function updatePeople () {
		$('people').innerHTML = $('numPeople').value
	}
	
	// Gather data from form field, store in object, then store in local storage
	function storeData () {
		var id = Math.floor(Math.random()*1000000);
		getTripType();
		
		// Object properties contain array with form label and input value
		var trip = {};
			trip.method = ["Travel Method: ", $('travelMethod').value];
			trip.type = ["Trip Type: ", tripTypeValue];
			trip.dest = ["Destination: ", $('dest').value];
			trip.date = ["Date: ", $('date').value];
			trip.people = ["Number of People: ", $('numPeople').value];
			trip.notes = ["Notes: ", $('notes').value];
		
		// Save data into local storage, use Stringify to convert object to string
		localStorage.setItem(id, JSON.stringify(trip));
		alert("Trip Saved!");
	}
	
	// Write data from localStorage to browser
	function getData () {
		toggleDisplay("on");
		if (localStorage.length === 0) {
			alert("There are no saved trips currently.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "savedTrips");
		$('pageContent').appendChild(makeDiv);
		
		for (var i = 0, j = localStorage.length; i < j; i++) {
			var makeSubDiv = document.createElement('div');
			makeSubDiv.setAttribute("class", "tripContent");
			makeDiv.appendChild(makeSubDiv);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeList = document.createElement('ul');
			makeSubDiv.appendChild(makeList);
			
			for (var k in obj) {
				var makeLi = document.createElement('li');
				makeList.appendChild(makeLi);
				var optSubText = obj[k][0]+ " " + obj[k][1];
				makeLi.innerHTML = optSubText;
			}
		}
	}
	
	// clear data in localStorage
	function clearData () {
		if (localStorage.length === 0) {
			alert("There are no saved trips to clear.");
		} else {
			localStorage.clear();
			alert("All saved trips have been cleared.");
			window.location.reload();
			return false;
		}
	}	
	
	// Variable defaults
	var travelMethods = ["Plane", "Train", "Car"],
		tripTypeValue;
	createTravelMethodList();
	
	// Set Link & Submit Click Events
	var viewLink = $('viewAllTrips');
	viewLink.addEventListener("click", getData);
	
	var clearLink = $('clearTrips');
	clearLink.addEventListener("click", clearData);
	
	var addButton = $('addTrip');
	addButton.addEventListener("click", storeData);
	
	var peopleSlider = $('numPeople');
	peopleSlider.addEventListener("change", updatePeople);

});