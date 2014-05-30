//Use this file to implement Part One of your project

var animal;


var objKeyPrint = function(props) {
  for(var keys in props) {
    //console.log(keys)
  }
}

var x = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }

// objKeyPrint(x);
var test = [];

var objValuePrinter = function (obj) {
  for(var key in obj) {
    if (typeof obj[key] === 'string') {
      test.push(obj[key]);
    }
  }
  //console.log(test.join(' '));
};

objValuePrinter(x);

var sounds = ['quack', 'honk', 'sneeze', 'growl'];

var arrValuePrinter = function(arr) {
  for(var i=0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

arrValuePrinter(sounds);


var sounds = [];
var dataTypeChecker = function(x){
  if (_.isArray(x)){
    console.log('array');
  }else{
    console.log('object');
  }
}

dataTypeChecker(sounds);

var x = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] };

var capitalizeVals = function(obj) {
  for(var key in obj) {
    if(typeof obj[key] === 'string') {
      var capitalized = obj[key].charAt(0).toUpperCase() +  obj[key].slice(1);
      var newObj =  {};
      newObj[key] = capitalized;

    }
  }
  console.log(newObj);
}

capitalizeVals(x);


