var comparisons = ["nastier", "whiter", "dumber", "pastier", "crustier", "uglier", "stinkier", "more disgusting", "blacker", "crappier"];
var superlatives = ["nastiest", "whitest", "dumbest", "pastiest", "crustiest", "ugliest", "stinkiest", "most disgusting", "blackest", "crappiest"];
var people = ["Maya Angelou", "me", "your momma", "Hillary Clinton", "Thor", "my grandmomma", "you", "the Reverend Martin Luther King, Jr", "the Pope", "Danny Devito", "Sarah Palin"];
var posessivepeople = ["Maya Angelou's", "my", "yo momma's", "Hillary Clinton's", "Thor's", "my grandmomma's", "your", "the Reverend Martin Luther King, Jr.'s", "the Pope's", "Danny Devito's", "Sarah Palin's"];
var things = ["vag", "libido", "dingdong", "legs", "sex life", "butt", "body", "torso", "entire extended family", "stupid dumbass face"];

window.onload = function(evt) {
	document.getElementById("clickme").onclick = function(evt) {
		var sentence = document.getElementById("comparison");
		var entry = document.getElementById("yourthing").value;
		if (entry == "") {
			sentence.innerHTML = "Enter something, fool.";
			return;
		}
		
		var type = Math.floor(Math.random() * 3);
		switch(type) {
			case 0:
				sentence.innerHTML = "is " + chooseRandom(comparisons) + " than " + chooseRandom(posessivepeople) + " " + chooseRandom(things) + ".";
				break;
			case 1:
				sentence.innerHTML = "is " + chooseRandom(comparisons) + " than " + chooseRandom(people) + ".";
				break;
			case 2:
				sentence.innerHTML = "is the " + chooseRandom(superlatives) + " damn thing."
				break;
		}
	}
}

function chooseRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}