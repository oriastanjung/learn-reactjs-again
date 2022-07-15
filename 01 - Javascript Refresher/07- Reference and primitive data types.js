// primitive ==> all variable expect array and object
let a = 2;
let b = a; // primitive (not the address)

console.log("a = " + a);
console.log("b = " + b);
b = 3;
console.log("\nafter\na = " + a);
console.log("b = " + b); // the a variable wont change

// referemce ==> will change the copy variable

const person ={
    name : "orias"
}

const secondPerson = person;
console.log("person 1 = " + person.name);
console.log("person 2 = " + secondPerson.name);
person.name = "new name";
console.log("\nafter\nperson 1 = " + person.name);
console.log("person 2 = " + secondPerson.name);// the second person name change too

// so for the array and object if we just want to copy use the spread ops

const thirdPerson = {...person};
person.name = "orias"
console.log("\nafter\nperson 1 = " + person.name);
console.log("person 2 = " + secondPerson.name);
console.log("person 3 = " + thirdPerson.name); // this name will stay like before
