// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
//i- two integers
//o- an array containing all the values between the two integers, in reverse if the start is greater
//c-want to use a loop and push
//e-

function range(start, end) {
  // YOUR CODE BELOW HERE //
  //create storage array
  var stArr =[];
  //if statement to check if end is less than start, with reverse loop
  if (end < start){
  //descending for loop if true
  for (var i = start; i >= end; i--){
  //push values onto storage array
    stArr.push(i);
    }
  } else {
  //ascending for loop if false, 
  for (var i = start; i <= end; i++){
  //push the values into the storage array
  stArr.push(i);
  }
}
  //return array
return stArr;
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
