// #!/usr/bin/env node

'use strict';

const { keys } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
//i- an array 
//o- not defined, though we need to loop forward through the array
//c- print results to console
//e- 

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //create for loop that loops forward through array
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  return;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
//i- an array 
//o- not defined, though we need to loop backward through the array
//c- print results to console
//e- 

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
//create a for loop that loops backward through an array
  for (var i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
}
return array[i];
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
//i- Object
//o- array containing object keys
//c- feel like we should be using a for loop considering that is the assignment name
//e-

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var kArray = [];
  for(var i = 0; i < Object.keys(object).length; i++){
    kArray.push(Object.keys(object)[i]);
  }
  return kArray;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */

//i- object
//o- it's keys printed to the console
//c- have to use a loop
//e-

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(var i = 0; i < Object.keys(object).length; i++){
    console.log(Object.keys(object)[i]);
  }
  return ((object)[i]);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */

//i-object
//o-values from object in an array
//c-for loop
//e-
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var vArray = [];
  for(var i = 0; i < Object.values(object).length; i++){
    vArray.push(Object.values(object)[i]);
  }
  return vArray;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
//i- object
//o- it's values printed to the console
//c- have to use a loop
//e-
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var i = 0; i < Object.values(object).length; i++){
    console.log(Object.values(object)[i]);
  }
  return ((object)[i]);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
