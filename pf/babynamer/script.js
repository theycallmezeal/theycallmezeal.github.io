var initials = ["D", "Dr", "K", "J", "T", "Tr", "B", "Br"];
var vowels = ["e", "a", "y"];
var middles = ["x", "l", "t", "d", "s"];
var endings = ["or", "er", "on", "an", "en"];

window.onload = function(evt) {
	document.getElementById("clickme").onclick = function(evt) {
		var sentence = document.getElementById("name");
		
		var type = Math.random();
		if (type < 0.5) {
			sentence.innerHTML = choose(initials) + choose(vowels) + choose(middles) + choose(endings);
		} else {
			sentence.innerHTML =  choose(initials) + choose(vowels) + choose(middles) + choose(middles) + choose(endings);
		}
	}
}

function choose(array) {
	return array[Math.floor(Math.random() * array.length)];
}