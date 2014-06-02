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

/* for the next challenge I decided to use jQuery. My markup looks like this:
<div id="content">
            <section id="branding">
              HeavyPettingZoo.com
            </section>

            <section id="profile">
                <h1>Friends: </h1>
<!--
// Structure will be added dynamically:
                <h2 class="species"></h2>
                <h3 class="tagline"></h3>
                <p class="noises"></p>
-->
                <p id="friends"></p>
                <p id="matches"></p>
            </section>
        </div>
*/
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

// `objKeyPrinter` loops through the properties of any object and returns a string of all the keys.
var obj = {};
var objKeyPrinter = function(obj){
    var newString = '';
    for (var key in obj) {
      newString = newString + key + ' ';
    }
    return newString.trim();
};

// `objValuePrinter` loops through all the properties in a given object and returns a string of all the values that are strings.
var objValuePrinter = function(obj){
    var newString = '';
    for (var key in obj) {
      if (typeof obj[key] === 'string'){
      newString = newString + obj[key] + ' ';
    }
  }
  newString = newString.trim();
  return newString;
};

// `arrValuePrinter` takes a given array and returns the values as a string
var arr = [];
var arrValuePrinter = function(arr) {
    var myString = '';
    for (var i = 0; i<arr.length; i++)  {
        myString += arr[i] + ' ';
    }
    myString = myString.trim();
    return myString;
};

// `dataTypeChecker` takes either an array or an object and returns either `'array'` or `'object'` as appropriate.
var dataType;
var dataTypeChecker = function(dataType) {
  if (Array.isArray(dataType) === true) {
      return 'array';
      } else {
      return 'object';
  }
};

// `capitalizeVals` takes an object, capitalizes the first letter of each string value in the object, and returns the object. Ignore any non-string values like arrays, numbers or objects.
var objString = '';
var capitalizeVals = function(objString) {
    var newObjStr = '';
      for (var key in objString) {
          if (typeof objString[key] === 'string'){
            newObjStr = (newObjStr + objString[key] + ' ');
          }
      }
    return newObjStr.trim();
};

// `strCapitalizer` takes a string, capitalizes the first letter of each word, and returns the string.
var str;
var strCapitalizer = function(str) {
      arr = str.split(' ');
      str = '';
      for (i = 0; i < arr.length; i++) {
        str = (str + arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase() + ' ');
      }
    return str.trim();
};

// `unique` takes an array, removes any duplicate values and returns the array.
var unique = function(arr) {
  arr.sort();
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] !== arr[i-1]) {      
             newArray.push(arr[i]);
     }  
  }
  return newArray;
};

// `extend` takes two objects and copies the properties of the first object on to the second. It does not return anything.
var obj2 = {};
var extend = function(obj, obj2) {
  for (var key in obj) {
        if (typeof obj[key] === 'string') {
        obj2[key] = "";
      }
        else {
        obj2[key] = [];
      }
    }
  console.log(obj2);
  return false;
};


// 1a Welcome logger
var welcomeMessage = function(obj) {
  for (var key in obj) {
    if (obj[key] === loggedIn.species) {
    return ('Welcome, ', strCapitalizer(obj[key]));
    }
  }
};

var profileData = function(obj) {
  var temp = '';
  for (var key in obj) {
    if (typeof obj[key] !== 'string') {
        // console.log(key, ' is an array');
        var arr = [obj[key]];
        var temp3 = strCapitalizer(key) + ': ' + arrValuePrinter(arr) + ' ';
        temp = temp + temp3 + ' ';
    }
    else {
      var temp1 =  strCapitalizer(key);
      var temp2 = strCapitalizer(obj[key]);  
      temp = temp + temp1 + ': ' + temp2 + ', ';
    }
  }
      return temp.trim();
};

// 1b. Create a function called `relationshipLogger` that takes an animal object and returns the relationship object if it contains one.
var relationshipLogger = function(obj) {
    if ( 'relationships' in obj ) {
      return obj.relationships;
    }
    else {
      console.log("You have no relationships :(");
        return;
    }
};

// 1b - status checker

var statusChecker = function(loggedIn, obj) {
    for (var i = 0; i<obj.relationships.friends.length; i++) {
      if ( loggedIn.species === obj.relationships.friends[i] ){
        return loggedIn.species + ' is a friend of ' + obj.species;
      }
      else {
          for (var x = 0; x<obj.relationships.matches.length; x++) {
          if ( loggedIn.species === obj.relationships.matches[i] ){
            return loggedIn.species + ' is a match of ' + obj.species;
          }
         else {
           return loggedIn.species + ' and ' + obj.species + ' have no relation yet.';
        }
      }
    }
  }
};
