//Use this file to implement Part One of your project
// STEP 1A Object
var animal = {};
animal.species = 'gecko';
// console.log(animal.species);
animal['tagline'] = 'save 15/% on car insurance';
// console.log(animal['tagline']);
animal.noises = null;
// console.log(animal);

// STEP 1B Array
var noiseArray = [];
noiseArray.push('ello!'); // native array method
// console.log(noiseArray);
noiseArray[1] = 'squeak!'; // bracket notation
noiseArray.unshift('moo'); // noise to beginning
noiseArray[3] = 'ca-caaw!'; // noise to end with index

// STEP 1C Nested Array
var noizes = 'noises';
animal[noizes] = noiseArray;
// console.log(animal);
// END STEP 1

// STEP 2 Collection of animals
var animals = [];
animals.push(animal);
var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl']};
animals[1] = quackers;
animals[2] = { species: 'rabbit', tagline: 'Whats up Doc?', noises: ['sniff', 'wiggle', 'hop', 'crunch']};
animals[3] = { species: 'ogre', tagline: 'Ogres are like onions', noises: ['burp', 'slosh', 'crumble', 'smash']};

// STEP 3a friends list (array)
var friends = [];
// adding all animals to friends array
for (var i = 0; i < animals.length; i++ ) {
      friends.push(animals[i].species);
  };
// console.log(friends);

// STEP 3b Relationships object
var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;

relationships.matches[0] = 'frog';
relationships.matches[1] = 'moose';
relationships.matches[2] = 'chicken';
relationships.matches[3] = 'goose';

for (var i = 0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}

// console.log(relationships);
//Any code in part1.js is still accessible in this file!
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.
// console.log(animals);

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

// Scenario 2 + extra credit
var loggedIn = animals[0];
// console.log('Scenario 2: ', loggedIn.species, 'is logged in');

// $(document).ready(function() {

//    for (var i = 0; i < animals.length; i++) {
//    if (animals[i] != loggedIn) {
//    $('#profile').append("<p>user " + (i + 1) + ". " + animals[i].species + ': ' + animals[i].tagline + "</p>");
//      }
//    }
// });

//Scenario 3
 for (var i = 0; i < animals.length; i++) {
  if (animals[i].species == 'gecko') {
  //  console.log('this is a gecko');
    animals[i].relationships.friends[5]="";
    animals[i].relationships.matches[1]="";
  }
  else {
 //   console.log('this is not a gecko');
    animals[i].relationships.friends[4] = 'giraffe';
    animals[i].relationships.matches[2] = 'moose';
  }
  // console.log(animals[i]);
}

// Scenario 4
var loggedIn = animals[3];

loggedIn.species = 'toucan';
loggedIn.noises = ['ca-caaw!', 'polly wanna cracker', 'froot loooooops!'];

for (var i = 0; i < animals.length; i++) {
  animals[i].relationships.matches = ['turkey', 'chicken'];  // already done before scenario 5
}

$(document).ready(function() {
  for (var i = 0; i < animals.length; i++) {
    if (animals[i] != loggedIn) {
    $('#profile').append("<div class='animals'><h1 class='species'>" + animals[i].species +  "</h1>"  +
      "<h3 class='tagline'>" + animals[i].tagline + "</h3>" +
      "<p class='noises'>" + animals[i].noises + "</p>" +
      "<p>Relationships: " + animals[i].relationships.friends.length + "<br />" +
      "<p>Matches: " + animals[i].relationships.matches.length + "</p></div>");
    }
    else {
    $('#profile').prepend("<div class='animals'><h1>" + animals[i].species + ' is logged in</h1>' +
      "<h2 class='tagline'>" + animals[i].tagline + "</h2>");
    }
  }
   $('#friends').append(' relationships: ' + loggedIn.relationships.friends);
   $('#matches').append(' matches: ' + loggedIn.relationships.matches);
});

// Scenario 5
loggedIn.species = 'parrot';
loggedIn.noises[0] = 'pirates arrrrrr wonderful!';

// change animal.species to animal.name in all objects
// for (var i = 0; i < animals.length; i++) {
//   animals[i]['name'] = animals[i]['species'];
//   delete animals[i].species;
//  }

//  Helper Methods - DAY 4
var obj = {};
var objKeyPrinter = function(obj){
    for (var key in obj) {
      console.log(key);
    }
};

var objValuePrinter = function(obj){
    for (var key in obj) {
      if (typeof obj[key] === 'string'){
      console.log(obj[key]);
      }
    }
};

var arr = [];
var arrValuePrinter = function(arr) {
    var myString = '';
    for (var i = 0; i<arr.length; i++)  {
        myString += arr[i] + ' ';
    }
    myString = myString.trim();
    console.log(myString);
};

// dataTypeChecker
var dataType;
var dataTypeChecker = function(dataType) {
  if (Array.isArray(dataType) === true) {
      console.log('array');
      } else {
      console.log('object');
  }
};



