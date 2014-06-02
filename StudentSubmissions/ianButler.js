//Part 1

var animal;
animal = {};

animal.species = "dog";
animal["tagline"] = "its a dog eat dog world";
animal.noises = null;


var noiseArray = [];

noiseArray[0] = "bark";
noiseArray.push("arf");
noiseArray.unshift("woof");
noiseArray[noiseArray.length] = "growl";


var noizes = "noises";
noizes = noiseArray;
animal.noises = noizes;
//console.log(animal);


var animals = [];

animals[0] = animal;
var quackers = {species: 'duck', 
				tagline: 'Afflack', 
				noises: ['quack', 'honk', 'sneeze', 'growl']};

animals.push(quackers);

var meow = { species: "cat",
			tagline: "I hate Mondays",
			noises: ["meow", "hiss", "yell", "growl"]	
};
var milky = {
			species: "cow",
			tagline: "Milk does a body good",
			noises: ["moo", "moo some more"]
};
animals[animals.length] = meow;
animals.push(milky);
//console.log(animals);

var friends = [];

friends.push(animal.species, meow.species);
//console.log(friends);


var relationships = {};
relationships["friends"] = friends;


var matches = [];

relationships["matches"] = matches;

matches.push(meow.species);
matches[matches.length] = milky.species;

//console.log(relationships);


for (var i = 0; i < animals.length -1; i++) {
	animals[i]["relationships"] = relationships;
}

//console.log(animals);




//Part 2

var profileAnimal = quackers;


for (var key in profileAnimal) {
	if (typeof profileAnimal[key] === "string") {
		//console.log(key + ": " + profileAnimal[key]);
	} else if (profileAnimal[key].length) {
		for (var i = 0; i < profileAnimal[key].length -1; i++) {
			//console.log(key + ": " + profileAnimal[key]);
		}
	} else {
		//console.log(key + ": " + "click here for data");
	}
};




for (var i = 0; i < animals.length; i++) {
	for (var key in animals[i]) {
		if (key === "species") {
			//console.log((i+1 + ". ") + animals[i]["species"] + ": " + animals[i]["tagline"]);
		} 
	}	
}


//Scenario 2b
// I have no idea how to only list out animals that aren't on the friends list.  I tried.



//Scenario 3

for (var i = 0; i < animals.length; i++) {
	for (var key in animals[i]) {
		//console.log(animals[i]["species"]); 
	}	
}









