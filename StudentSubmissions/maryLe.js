//Use this file to implement Part One of your project


var animal = {
  species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl']}


var objKeyPrinter = function(animal) {

    for (var i in animal) {
    console.log(i);}
};

var objValuePrinter = function(animal) {

  for (var i in animal) {
  if (typeof animal[i] === ("string" || "number")) {
    console.log(animal[i]);}
  };
};

  var arrValuePrinter = function(animal) {
          for (var x = 0; x < animal.length; x++){
            console.log(animal[x]);}
};

var dataTypeChecker = function(data) {
  if( Object.prototype.toString.call(data) === '[object Array]' ) {
        console.log ("array");
}


  else if ( Object.prototype.toString.call(data) === '[object Object]' )
  	console.log ("object");

  else
  	console.log ("Not an object or array");
}

var capitalizeVals = function(animal){
  for (var i in animal) {
  if (typeof animal[i] === ("string" || "number")) {
    console.log(animal[i].charAt(0).toUpperCase() + animal[i].substring(1));}
  };

}



var strCapitalizer = function(string){
  if (typeof string === "string") {
//console.log(string.replace(/\w\S*/g, function(txt){console.log(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());}));
return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}
    //console.log(string.charAt(0).toUpperCase() + string.substring(1));}
  };
 //else 
 	//console.log("not a string");
//}


var unique = function(a){
	var isUnique = a[0];
	var array = [isUnique];
	//array[0] = isUnique;

	for(var i = 0; i < a.length; i++)
	{
		if (isUnique != a[i]){
			isUnique = a[i];
		array.push(isUnique)
		 		
		}
	}
	console.log(array);
	return(array);
}	


var extend = function(obj1, obj2){
	  for (var i in obj1) {
     obj2[i]=0;    
  };
  //console.log(obj2);
};


//1a
var welcomeMessage = function (animal){

		return ("Welcome, " + strCapitalizer(animal.species));
	}

//1b
var profileData = function (animal) {

for (var i in animal){
if (i != 'noises')
	{console.log(strCapitalizer(i)
	 + ": " + 
	 strCapitalizer(animal[i])+",");}
};
};

//1c


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//DAY TWO

//Use this file to implement Part One of your project
//OBJECTS
var animal = {};
  animal.species =  "canine";
  animal["tagline"] = "tails";
  animal.noises = null;
//animal["noises"] = null

console.log(animal.species);
console.log(animal["tagline"])
console.log(animal);

//ARRAY

var noiseArray = [];
noiseArray[0] = "meow";
noiseArray.push("woof");
noiseArray.unshift("quack");
noiseArray[noiseArray.length] = "purrr";

console.log(noiseArray);
console.log(noiseArray.length);

//NEST

var noizes = animal.noise = noiseArray;

console.log(noizes);
console.log(animal);
// will this and the one below both work??

var noizes = "noises";
animal[noizes];

animal[noizes] = noiseArray;


console.log(animal[noizes]);

console.log(animal);

// STEP 2 ANIMALS

var animals = [];
animals[0] = animal;

var quackers = {
  species: "duck",
  tagline: 'Afflack',
  noise: ['quack', "honk", "sneeze", 'growl']
};

animals.push(quackers);

var pet1 ={
  species: "lion",
  tagline: 'Simba',
  noise: ['rar', "rawr", "yawn", 'grrr']
};

var pet2 = {
  species: "turtle",
  tagline: 'turtwat',
  noise: ['snap', "meep", "boop", '...']
};

animals.push(pet1, pet2);

console.log(animals);
console.log(animals.length);

// STEP 3 RELATIONSHIPS

var friends = [];
friends[0] = animals[0].species;
friends[1] = animals[1].species;
console.log(friends);

// relationships

var relationships = {};
relationships.friends = friends;

console.log(relationships);
console.log(relationships.length);

var matches = [];
relationships.matches = matches;

relationships.matches.push(animals[0].species, animals[1].species);

for (var i = 0; i < animals.length; i++){
  animals[i].relationships = "taken";
};

console.log(animals);

//PART TWO: ANIMAL PROFILE PAGE

var profileAnimal = animals[3];

for (var i in profileAnimal) {
  console.log (i);
  if (typeof profileAnimal[i] === "string")
    console.log(profileAnimal[i]);
  else
    console.log("click here for value.");
};


for (var i in profileAnimal) {
  console.log (i);
  if (typeof profileAnimal[i] === "string") {
    console.log(profileAnimal[i]);
  } else if (profileAnimal[i].length) {
    for (var x = 0; x < profileAnimal[i].length; x++)
      console.log(profileAnimal[i][x]);
  }
};



console.log(profileAnimal);

//
//
//
console.log(relationships, animal.friends);


for (var i = 0; i < animals.length; i++){
  console.log(animal[i].matches, animals[i].friends);
};

