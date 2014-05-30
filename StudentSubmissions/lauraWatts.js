// Day 2

//Any code in part1.js is still accessible in this file!
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

console.log("Part 2");
console.log('animals:', animals);

////////////////////////////////////
// Scenario 1 - Animal profile page

// 1a - Choose an animal and log its data
console.log('1a - log animal data')
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
// Alternatively 
// Remove the behavior (above) based on type to a separate function (function logValue()). Get the value to print on the same line as the key.
logProps = function (obj) {
  for (key in obj) {
    var val = obj[key];
    if (typeof val === 'string') {
      console.log(key,':',val);
     }
    else if (Array.isArray(val)) {
      console.log(key,':', val.join(" "));
    }
    else {
      // ??? I would like to iterate on the object. But when I try that, the relationship arrays print out before this log statement. ???
      //var props = logProps(val)
      console.log(key,'(obj):', val);
      // console.log(props);
    }
  }
}

logProps(profileAnimal);

// 1a(2)  - Log relationships info, delete a friend
console.log('1a (again) - log relationship data')
var rels = profileAnimal.relationships;
// console.log('friends:', rels.friends);
// console.log('matches:', rels.matches);
// Instead we can reuse the logProps function here
logProps(rels);
// Delete a friend
/*
rels.friends.pop();
console.log('friends:', rels.friends);
*/
// Or function delFriend () {
// }


//////////////////////////////////
//Scenario 2: Browse Animals Page

// 2a: Log the Animals in a List
console.log('2a - log the animals in a list');

for (i=0; i<animals.length; i++) {
  var counter = (i+1) + ".";
  console.log(counter, animals[i].species,":", animals[i].tagline);
}

// 2b: Filter Animals list
console.log('2b - only log the animals that are not the user and not already a friend');

var user = animals[0];
console.log('user:', user);
var userFriends = user.relationships.friends; // 
console.log('userFriends:', userFriends); // ["cat"] 

for (i=0; i<animals.length; i++) {
  // If the current animal is not the user and is also not in the userFriends list, go ahead and log it
  var counter = 1;
  if (animals[i] != user && userFriends.indexOf(animals[i].species) < 0) {    
    // When I log the counter my results all come out in quotes
    // console.log(counter, ".", animals[i].species,":", animals[i].tagline); // ???
    console.log(animals[i].species,":", animals[i].tagline);
    counter++;
  }
}

//////////////////////////////////////
// Scenario 3: Search and Add Friends
console.log('Scenario 3');

// Write a loop that goes through the animals collection and selects a particular species and logs its information.
searchSpecies = 'turtle';

for (i=0; i<animals.length; i++) {
  if (animals[i].species === searchSpecies) {
    logProps(animals[i]);  
  }
}

// How would you change this to select a different species this time?
  // ? You mean like this?
  // searchSpecies = 'cat';

// Add a new friend to the animal you searched for
console.log('Add friend:');

selectAnimal = function(str) {
  for (i=0; i<animals.length; i++) {
    if (animals[i].species === str) {
      return animals[i];
    }
  }
}

var myAnimal = selectAnimal(searchSpecies);
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
console.log('Scenario 4');
console.log('animals:', animals);

var loggedinUser = animals[3];
console.log(loggedinUser);
loggedinUser.species = 'superturtle';
console.log(loggedinUser);
loggedinUser.noises = ['SNAP', 'plunge', 'roar']; // ??? As soon as I add this line the noises are updated **In all of the previous (scenario 4) console.log calls** ???
// console.log(loggedinUser);

// // Add a new match to all of the animals
// for (i=0; i<animals.length; i++) {
//   animals[i].relationships.matches.push('Godzilla the Gorilla'); // ??? Why does this add it four times? ???
// }

// console.log(animals);

// What else?
  // 























