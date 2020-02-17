//PASS by VALUE
let x = 3;

//let y = x;

console.log(y);

//PRIMITIVES CANNOT MUTATE.
//'3' THT WAS USED WITH 'X'  previously is completely thrown out and replaced with 4.
x = 4;
let y = x;

console.log(y);

//PASS BY REFERENCE
const a = {
  name: "Manav"
};

//B will point to the same memory address as a.
//What happens to 1 will affect the other.
const b = a;

a.name = "Dhanav";

console.jog(b.name);
