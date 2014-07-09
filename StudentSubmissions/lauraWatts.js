//Use this file to implement Part One of your project

// 1a
// Create an animal object
var animal = {};
animal.species =  'canine';
// console.log(animal.species);
animal['tagline'] = 'Loves sunsets on the beach';
// console.log(animal['tagline']);
animal.noises = null;
// console.log(animal);

// 1b
// Create an array of noises (noiseArray)
var noiseArray = [];
noiseArray[0] = 'woof';
noiseArray.push('grr');
noiseArray.unshift('whine');
noiseArray[noiseArray.length] = 'growl';
// console.log(noiseArray.length); //length is 4
// console.log(noiseArray.length-1); //last index is 3
// console.log(noiseArray);

// 1C
// Assign the noiseArray to our animal's noises property
var noizes = 'noises';
// console.log(animal[noizes]);
animal[noizes] = noiseArray;
animal['%^&'] = true;
var someVar = 'fur';
animal[someVar] = true;

// 2
// Create an array of animals and add animal-objects to it
// Notice we are using variables to add the objects to the array. The variable name is not part of the objects themselves.
var animals = [];
animals.push(animal);
// console.log(animals);
var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals.unshift(quackers);
// console.log(animals);

// Create a couple more animal objects and put them in the animals array
var fluffy = {
  species: 'cat',
  tagline: 'purr',
  noises: [
    'meow',
    'snort',
    'sneeze',
    'mew'
  ]
};
var elizabeth = {
  species: 'turtle',
  tagline: 'splash',
  noises: [
    'snap',
    'splash',
    'whatever',
    'mew'
  ]
};
animals.push(fluffy,elizabeth);

// Step 3
// Let's think about the best data structure to represent a relationship between two animals in our collection. Imagine that our app has a 'friendslist' on their profile where it lists out all of their friends. What do you think is the best way to represent this? Would you use an array or an object or some combination of both?
// Choose a data structure for the list of friends. Justify your decision.
// ...==> Use an array to name all the friends. You need a collection of some sort and using an object would require you to come up with a property name for each item.
// 

// Create a friends array and add two species to it
// Notice we are not putting animal objects into the friends array. Only a couple strings/species.
var friends = [];
friends.push(fluffy.species, quackers.species);
// console.log(friends);

// 3b Create a relationships object. 
// Add a friends property on the relationships object and set it's value to our friends array
// Add a matches property also, making it an array and populating it with a pair of strings/species as well 
var relationships = {};
relationships.friends = friends;
// console.log(relationships.friends);
// console.log(relationships); // ??????? Why am I getting 'birds' here?
// // friends.push('bird');
// console.log(friends);

var matches = [];
// console.log(matches);
relationships.matches = matches;
relationships.matches.push(elizabeth.species, animal.species);
// console.log(relationships);
// console.log(matches);

////////////////////////////
// Add a relationships property/object to each animal, setting it equal to our relationships object
 
// for (var i=0; i<animals.length; i++) {
//   animals[i].relationships = relationships;
// }
// 
// ...(much later): Ruh-roh
////////////////////////////

// No, not this either...
// for (var i=0; i<animals.length; i++) {
//   animals[i].relationships = {};
//   animals[i].relationships.friends = relationships.friends;
//   animals[i].relationships.matches = relationships.matches;
// }

for (var i=0; i<animals.length; i++) {
  animals[i].relationships = {};
  animals[i].relationships.friends = [];
  animals[i].relationships.matches = [];
  for (j=0;j<friends.length;j++) {
    animals[i].relationships.friends.push(friends[j]);
  }
  for (j=0;j<matches.length;j++) {
    animals[i].relationships.matches.push(matches[j]);
  }
}

// TODO: Learn more about objects
// For example, creating and adding propertries

////////////////////////////////////
////////////////////////////////////
// Part 2
////////////////////////////////////
////////////////////////////////////

// console.log(animals);

//Any code in part1.js is still accessible in this file!
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

console.log("Part 2");
console.log('animals:', animals);

console.log('//');
////////////////////////////////////
// Scenario 1 - Animal profile page

// 1a - Choose an animal and log its data
console.log('1a - log animal data')
// Our profile animal is selected from the animals array
var profileAnimal = animals[2];
console.log('profileAnimal:', profileAnimal);
/*
for (key in profileAnimal) {
  console.log(key,':');
  var val = profileAnimal[key];
  // logValue(val);
  if (typeof val === 'string') {
    console.log(val);
  }
  else if (Array.isArray(val)) {
    console.log(val.join(" "));
  }
  else {
    console.log(
      'click here for data'
    );
  }
}
*/
// Alternatively... 
// Remove the behavior (above) based on type to a separate function (function logValue()). Get the value to print on the same line as the key.
// TODO: This function should handle numbers and booleans, undefined. What about null?
// Oh, and the different types could be handled by separate functions. logProps would then call 'logArray', 'logObject', etc.  
var logProps = function (obj) {

  for (key in obj) {
    var val = obj[key];
    if (typeof val === 'string') {
      // console.log(key,'(string):',val);
      console.log(key,':',val);
    }
    else if (Array.isArray(val)) {
      // console.log(key,'(array):', val.join(" "));
      console.log(key,':', val.join(" "));
    }
    else {
      console.log(key,'(obj):');
      // console.log('(Object contents): ');
      logProps(val);
      // Or, maybe we should join the object properties for printing out (So we can print it all on one line)?
      // var objProps = logProps(val);
      // console.log(objProps);
      // But that doesn't help. Because the logging is actually happening in the else-if for array. 
    }
  }
}
logProps(profileAnimal);
// logProps(animals); // That isn't good because 'animals' is an array. So you don't get all the info printed out.

for (i=0;i<animals.length;i++) {
  logProps(animals[i]);
}

console.log('//');
// 1a(2)  - Log relationships info of our profileAnimal
console.log('1a (again) - log relationship data')
// Store the relationships info of our profileAnimal in a variable
var rels = profileAnimal.relationships;

// Use the logProps function to display the profileAnimals friends and matches
logProps(rels);

console.log('//');
// Write a function to delete a friend
console.log('(Delete a friend)');
console.log('friends:', rels.friends);

var delFriend = function (str, obj) {
  // locate the friend to be deleted in the friends array
  var arr = obj.relationships.friends;
  var index = arr.indexOf(str);
  // console.log(index);
  var removed = arr.splice(index,1);
  // console.log ('removed:',removed);
  // console.log (arr);
}

delFriend('duck', profileAnimal);

console.log('Remaining friends:', rels.friends);
console.log('//');

//////////////////////////////////
//Scenario 2: Browse Animals Page

// 2a: Log the Animals in a List
console.log('2a - log the animals in a list');

for (i=0; i<animals.length; i++) {
// Make a counter to number the animals in the output
  var counter = (i+1) + ".";
  console.log(counter, animals[i].species,":", animals[i].tagline);
}

console.log('//');

// 2b: Filter Animals list
console.log('2b - only log the animals that are not the user and not already a friend');
// Let's use a different animal from the profileAnimal we have been working with
var user = animals[0];
console.log('user:', user); // The duck (object)
var userFriends = user.relationships.friends; // 
console.log('userFriends:', userFriends); // ["cat"] 

var counter = 1;
for (i=0; i<animals.length; i++) {
  // If the current animal is not the user and is also not in the userFriends list, go ahead and log it
  if (animals[i] != user && userFriends.indexOf(animals[i].species) < 0) {    
    // When I log the counter the rest of the output comes out in quotes. Why?? Compare these two console.log statements (the output)
    // console.log(counter, '.', animals[i].species,':', animals[i].tagline); // ???
    console.log(animals[i].species,':', animals[i].tagline);
    counter++;
  }
}

console.log('//');

//////////////////////////////////////
// Scenario 3: Search and Add Friends
console.log('Scenario 3');

// Write a loop that goes through the animals collection and selects a particular species and logs its information.
mySpecies = 'turtle';

for (i=0; i<animals.length; i++) {
  if (animals[i].species === mySpecies) {
    logProps(animals[i]);  
  }
}

console.log('//');

// How would you change this to select a different species this time?
  // What do you mean? Like this?...
  // mySpecies = 'cat';

// Or is the answer, put the species selection in a function?
var selectAnimal = function(str) {
  for (i=0; i<animals.length; i++) {
    if (animals[i].species === str) {
      return animals[i];
    }
  }
}
logProps(selectAnimal('turtle'));

console.log('///');

// Or how about this... (which is better?)
var logSpeciesProps = function (str) {
  for (i=0; i<animals.length; i++) {
    if (animals[i].species === str) {
      logProps(animals[i]);  
    }
  }
}

logSpeciesProps('turtle');

console.log('//');

//////////////////////////////////////////////////
// Add a new friend to the animal you searched for
console.log('Add friend:');

// Use the selectAnimal function above to get the animal
var myAnimal = selectAnimal('turtle');
// console.log('myAnimal', myAnimal);
// console.log('myAnimal friends:', myAnimal.relationships.friends);

function addFriend(animal, friendAnimal) {
  animal.relationships.friends.push(friendAnimal);
}

addFriend(myAnimal,'bird');
console.log('myAnimal new friends:', myAnimal.relationships.friends);

// Add a new match to the same animal
console.log('Add match:');

function addMatch(animal, matchAnimal) {
  animal.relationships.matches.push(matchAnimal);
}
console.log(myAnimal.relationships.matches);
addMatch(myAnimal,'bunny');
console.log(myAnimal.relationships.matches);


////////////////////////////////////////
// Scenario 4: Edit Animal Profile Page
////////////////////////////////////////

// Ugh. All my troubles here had to do with not understanding how Chrome JS console behaves when expanding an object
// http://stackoverflow.com/questions/18098482/javascript-object-property-logged-in-google-chrome-console-before-declaration


console.log('Scenario 4');
console.log('animals:', animals); // getting unexpected output
// console.log('animals[3]:', animals[3]);
// console.log('animals[3] species:', animals[3].species);
// ToDo: Get comfy with debugger and stop using console.log as a solution for keeping track of what my objects are up to

var loggedinUser = animals[3];
console.log('User:',loggedinUser);

loggedinUser.species = 'superturtle';
console.log('User (species updated):', loggedinUser);

loggedinUser.noises = ['SNAP', 'plunge', 'roar']; 
// ??? As soon as I add this line the noises/species are updated **in each of the (previous) 'scenario 4' console.log calls** ???
// NM. See "Ugh" above.
console.log('User (noises updated):', loggedinUser);


// Oh wait. Do I have the same relationships object in each animal?
// ... Yes. I believe I do!

// Add a new match to all of the animals
for (i=0; i<animals.length; i++) {
  animals[i].relationships.matches.push('Godzilla the Gorilla'); // Why does this add it four times? Answer: Because there was only one relationship object and every animal referenced it. (Right?)
}

logProps(animals);

console.log('//');

////////////
// Scenario 5: Edit Animal Collection Data
console.log('Scenario 5');

// Change all the species properties to be called name instead.
for (i=0; i<animals.length; i++) {
  animals[i].name = animals[i].species; 
  delete animals[i].species;
}

// Reset all the friendslists on all the animals? 
for (i=0; i<animals.length; i++) {
  animals[i].relationships.friends = []; 
}

logProps(animals);







// 






