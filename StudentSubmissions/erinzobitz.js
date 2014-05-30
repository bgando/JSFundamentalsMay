//Use this file to implement Part One of your project

var animal1 = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] };

var printKeys = function(){
  var stringOfKeys = [];
  for(var key in animal1){
    stringOfKeys.push(key);
  }
  return stringOfKeys.join(" ");
};

printKeys();

var printValues = function(){
  var stringOfValues = [];
  for(var key in animal1){
    if(typeof animal1[key] === "string"){
      stringOfValues.push(animal1[key]);
    }
  }
  return stringOfValues.join(" ");
};

printValues();

var animalArray = ['quack', 'honk', 'sneeze', 'growl'];

var arrayLoop = function(){
  arrayString = [];
  for(var i=0; i < animalArray.length; i++){
    arrayString.push(animalArray[i]);
  }
  return arrayString.join(" ");
};

arrayLoop();

var dataTypeChecker = function(array){
  if(Array.isArray(array)){
    return "array"
  } else {
    return "object"
  }
};

dataTypeChecker(animalArray);

var capitalizeVals = function(object){
  var arrayOfPairs = [];
  for(var key in object){
    if(typeof object[key] === "string"){
      object[key] = object[key].charAt(0).toUpperCase() + object[key].slice(1);
    }
    arrayOfPairs.push(key + ": " + object[key]);
  }
  return arrayOfPairs;
};

capitalizeVals(animal1);

var myString = "this class rocks!";

var strCapitalizer = function(string){
  var arrayOfStrings = string.split(" ");
  var sentence = [];
  for(var i = 0; i < arrayOfStrings.length; i++){
    var word = arrayOfStrings[i].toString().charAt(0).toUpperCase() + arrayOfStrings[i].slice(1);
    sentence.push(word);
  }
  return sentence.join(" ");
};

strCapitalizer(myString);

var numberArray = [1,2,3,3,4];

var arrayUnique = function(array){
  var uniqueVals = [];
  for(var i = 0; i < array.length; i++){
    if(uniqueVals.indexOf(array[i]) === -1){
      uniqueVals.push(array[i]);
    }
  }
  return uniqueVals;
};

arrayUnique(numberArray);

var copyProperties = function(obj1, obj2){
  for( var key in obj1){

  }
};


//-------------------- Day 2 Code ---------------------------------

//Use this file to implement Part One of your project

var animal = {};
animal.species = 'gecko';
// console.log(animal.species);

animal['tagline'] = 'save 15/% on car insurance';

// console.log(animal['tagline']);

animal.noises = null;

// console.log(animal);

var noiseArray = [];
noiseArray.push('ello!');

// console.log(noiseArray);

noiseArray[1] = 'squeak!';
noiseArray.unshift('moo');
noiseArray[3] = 'ca-caaw!';

var noizes = 'noises';
animal[noizes] = noiseArray;

// console.log(animal);

// END STEP 1

var animals = [];

animals.push(animal);
var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl']};
animals[1] = quackers;

animals[2] = { species: 'rabbit', tagline: 'Whats up Doc?', noises: ['sniff', 'wiggle', 'hop', 'crunch']};
animals[3] = { species: 'ogre', tagline: 'Ogres are like onions', noises: ['burp', 'slosh', 'crumble', 'smash']};

var friends = [];

for (var i = 0; i < animals.length; i++ ) {
      friends.push(animals[i].species);
  };

// console.log(relationships);
//
// //Any code in part1.js is still accessible in this file!
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

var profileAnimal = animals[0];

// Scenario 1
// for (var key in profileAnimal) {
//   if (typeof profileAnimal[key] === 'string' || key === 'noises') {
//     console.log(key + ': ' + profileAnimal[key]);
//   }
//   else {
//     console.log('quack here for more data');
//   }
// }
// console.log(profileAnimal.relationships.friends);
// console.log(profileAnimal.relationships.matches);
// profileAnimal.relationships.friends.pop(2);
// console.log('now the friends are ', profileAnimal.relationships.friends);

// Scenario 2
// for (var i = 0; i < animals.length; i++) {
//   console.log((i + 1) + ". " + animals[i].species + ': ' + animals[i].tagline);
// }

// extra credit

//Scenario 3
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'gecko') {
//     animals[i].relationships.friends.push('monkey');
//     animals[i].relationships.matches.push('orc');
//     console.log(animals[i]);
//   }
// }

// Scenario 4
var loggedIn = animals[3];

loggedIn.species = 'toucan';
loggedIn.noises = ['ca-caaw!', 'polly wanna cracker', 'froot loooooops!'];

for (var i = 0; i < animals.length; i++) {
  animals[i].relationships.matches = 'turkey';
}
// console.log(animals);
