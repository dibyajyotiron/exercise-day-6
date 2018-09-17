/* eslint-disable */

// Check out the test suite for all the questions for implementation

// Use arrow functions in questions 1 - 4

// 1 (*)
const tripleAndFilter = (arr) => {
  let tripled = arr.map(el => { 
	return el*3
});
let filtered = tripled.filter(el => {
	if(el % 5 === 0)
		return el;
})
return filtered;


};


// 2 (*)
const doubleOddNumbers = (arr)=>{
	let odd = arr.filter(el =>{
		if(el%2 != 0){
			return el;
}
})
let doubled = odd.map(el=>{
		return el*2;
})
return doubled;


}

// 3 (*)
const mapFilterAndReduce = (arr) => {};

// 4 (*)
// var instructor = {
//   firstName: 'John',
//   sayHi: function() {
//     setTimeout(function() {
//       console.log("Hello " + this.firstName);
//     }, 1000);
//   }
// };

const instructor = {
  firstName: 'John',
};

/* Use default arguments in questions 5 and 6
  DO NOT USE || operator to set defaults like
  const a = b || '';
*/

// 5 (*)
function printFullName({ first, last }) {
  return `My name is ${first} ${last}`
}

// 6 (*)
function createStudent({ likesJavaScript, likesES2015 }) {
  const {JS, ES6} = {likesJavaScript,likesES2015}
  if(!JS && !ES6){
    return 'The student does not like much...';
  }
  else if(JS && ES6){
    return 'The student likes JavaScript and ES2015';
  }
  else if(!ES6) {
    return 'The student likes JavaScript!';
  }
  else if(!JS){
    return "The student likes ES2015!";
  }
  
}

// 7 placeInMiddle([1,2,6,7],[3,4,5]) (*)
function placeInMiddle(arr, vals) {
	let len = Math.floor(arr.length / 2);
	arr.splice(len,0,...vals);
	return arr;
}

// 8 (*)
function joinArrays(...args) {
	let newArr = Array.prototype.concat(...args)
	return newArr;
}

// 9 (*)
function sumEvenArgs(...args) {
  
}

// 10 (*)
function bind(fn, thisArg, ...outerArgs) {}

/** 11 (*)
  This is a typical mistake to make in JavaScript. We create a number of
  functions in a loop, and refer to an outside variable from these functions.
  All of them will end up referring to the same variable, which ends up being
  incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all
  functions in the array.

  Convert the functionality below to es6, making use of block scoping
 */

/* eslint-disable no-var, vars-on-top, no-loop-func */
function blockScoping(n) {
  var callbacks = [];
  for (var i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}
/* eslint-enable no-var, vars-on-top, no-loop-func */

/** 12 (*)
  Does the fact that account is constant mean that we can't update password?
  Why, or why not? And if we can, how could we make it so that we can't?
  Hint: Object property descriptors
 */

function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  account.password = 's3cret';
  return account.password;
}

/* 13 (*)
Given the data in the starting code, use a TEMPLATE LITERALS to produce the
following string. Make sure the numbers, names, and team name actually come
from the data.

    There are 4 people on the football team.
    Their names are Rooney, Ronaldo, Messi, Pogba.
*/

function templateLiterals() {
  const teamName = 'football';
  const people = [{
    name: 'Rooney',
    role: 'CF',
  },
  {
    name: 'Ronaldo',
    role: 'LW',
  },
  {
    name: 'Messi',
    role: 'RW',
  },
  {
    name: 'Pogba',
    role: 'CM',
  }];

  return '';
}

/* 14 (*)
  Write a function html() that can be used as a template string tag, and produces
  a string in which all the interpolated pieces are escaped as HTML. Use the
  supplied escapeHTML function to do the escaping.

  Remember that a tag function gets an array of in-between strings as its first
  argument, and then the interpolated values as further arguments.
*/

function escapeHTML(string) {
  return String(string)
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

function html(strings, ...variables) {

}

function callTemplateTagFunction() {
  const trueExpression = '5 > 4';
  const falseExpression = '3 < 1';
  return (html`The expression ${trueExpression} is "true" & ${falseExpression} is false`);
}

module.exports = {
  tripleAndFilter,
  doubleOddNumbers,
  mapFilterAndReduce,
  instructor,
  printFullName,
  createStudent,
  placeInMiddle,
  joinArrays,
  sumEvenArgs,
  bind,
  blockScoping,
  constImmutable,
  templateLiterals,
  callTemplateTagFunction,
};
