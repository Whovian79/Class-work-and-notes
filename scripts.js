//25 February 2020

//UNDEFINED is a PRIMITIVE TYPE.
// It signifies the absence of ANY value.
//let x;

//x =23

//NULL is a PRIMITIVE TYPE.
//NULL represents a deliberate assignment of `nothing`
let x = null;
console.log(x);

//this a JS OBJECT.(Use brackets to creat an object.)
const me = {
  name: "AJ"
};

console.log(me.name); //DOT NOTATION

//Create a new key value pair with age = 23.
me.age = 23;
me.name = "Ian";

console.log(me);

//NESTED OBJECT
const me = {
  name: "AJ",
  age: 40,
  pets: {
      cat: "Luna",
      dog: "Panda"
  }
};
console.log(me.pets);
