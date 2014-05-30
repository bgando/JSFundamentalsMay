//js fundamentals day 4 project -- warm-ups

//scenario 0
var quackers = {species: 'duck', tagline: 'Afflack', noises:
['quack', 'honk', 'sneeze', 'growl']};
var barkers = {species: 'dog', tagline: 'got scooby snacks?',
noises: 'whoah', 'eh': 'um'};
var meowers = {species: 'cat', tagline: 'where have you been!',
noises: 'meow'};

var objKeyPrinter = function(obj) {
  for(var key in obj) {
    console.log(key);
  }
};

var objValuePrinter = function(obj) {
  for(var key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(obj[key]);
    }
  }
};

var arrValuePrinter = function(arr) {
 console.log(arr.join(' '));
};

var dataTypeChecker = function(i) {
  if(Array.isArray(i)) {
    console.log('array');
  } else if (typeof i === 'object') {
    console.log('object');
  }
};

//not done still broken
var capitalizeVals = function(obj) {
  for(var key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key].toUpperCase();
    }
  }
  console.log(obj);
};

//not done still broken
var strCapitalizer = function(str) {
  var poop = str.split(" ") ;
  console.log(poop.length);
    for(var i = 0; i < poop.length; i++) {

      poop[i].charAt(0).toUpperCase();
    }
};
