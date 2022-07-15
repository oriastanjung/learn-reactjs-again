// import the default export
import Person from "./person"; // remember we default export as people but we change it to Person


//import from named export
import {multiply, addition} from "./maths"; // the named export is called and not modified

console.log(Person.name);
console.log(multiply(9,5));
console.log(addition(11,23));

