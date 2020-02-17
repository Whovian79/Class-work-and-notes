// ! 17 Feb 2020!

const a = 49; //True PRIMITIVES are compared by value.
const b = 49;

//Compare by reference.
const x = {
  name: "Manav"
};

const y = {
  name: "Manav"
};
// false b/c OBJECTS are COMPARED BY REFERENCE.
console.log(x === y);
