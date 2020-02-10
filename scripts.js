//!10 February 2020!

//Use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE.
//console.log(`Bracket notation with variable:${me[keyThatINeed]}`);

//console.log(me["keyThatINeed"]); //undefined
// Relational or COMPARISON OPERATORS always yields BOOLEANS.
console.log(1 === 2);

//To check if 2 things are considered to equal...
//`===` is STRICT EQUALITY
//It checks the VALUE and TYPE.
console.log(2 === "2"); //false
console.log(2 === 3);
console.log(2 !== 3); //true

//EXPRESSION is anything that evaluates to a value
//STATEMENTS combine EXPRESSIONS with keywords and other SYNTAX.
const x = 3;

if (x === 3) {
  //{}s establish SCOPE of the code.
  console.log("x is 3!");
} else {
  console.log("x is not 3")
}

if (age >= 25){
  console.log("Renting a car is affordable");
} else if (age >= 18){
  //If age is less than or equal to 24
  console.log("Renting will be expensive!")
} else {//All other ages
console.log {
  ("You can't rent a car legally!")
}
}

