// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */

//i-an input value, may be any type of data
//o- boolean dependent on if the input is an Array or not
//c- 
//e-

function isArray(value) {
  // YOUR CODE BELOW HERE //
  //use Array.isArray() to determine if value is an array
 return Array.isArray(value);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 * 
 */
//i- an input value, may be any type of data
//o- a boolean dependent on if the input is true object or not
//c-instance of is a good hint
//e-
function isObject(value) {
  // YOUR CODE BELOW HERE //
  //will check if object is an array and return false
  if(Array.isArray(value)) return false;
  //will check if an object is null, return false
  if(value === null) return false;
  //will check if object is Date, return false
  if (value instanceof Date) return false;
  //remaining value can check object other types of data
  if(typeof value === 'object') return true;
  //if nothing else, return false
  return false;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

//i- an input value, can be any kind of data
//o- true if an array or collection object, otherwise false
//c-
//e-
function isCollection(value) {
  // YOUR CODE BELOW HERE //

//will check if an object is null, return false
if(value === null) return false;
//will check if object is Date, return false
if (value instanceof Date) return false;
//remaining value can check object other types of data
if(typeof value === 'object') return true;
//will check if object is an array and return false
if(Array.isArray(value)) return true;
//if nothing else, return false
return false;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */

//i- a value, can be any type of data
//o- a string that tells you what kind of data it is
//c-
//e-
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  //check if item is string, return string
  if(typeof value === 'string') return 'string';
  //check if item is undefined, return string
  if(typeof value === undefined) return 'undefined';
  //check if item is null, return string
  if(value === null) return 'null';
  //check if item is function, return string
  if(typeof value === 'function') return 'function';
  //check if item is number, return string
  if(typeof value === 'number') return 'number';
  //check if item is date, return string
  if (value instanceof Date) return 'date';
  //will check if object is an array and return string
  if(Array.isArray(value)) return 'array';
  //check if item is an object, return string
  if(typeof value === 'object') return 'object';
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
