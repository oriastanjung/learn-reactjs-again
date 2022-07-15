const numbers = [1,2,3];
// destructure array

[num1, num2] = numbers;
console.log(num1, num2);

const person = {
    name: "ori",
    age: "mantap"
}


// destructure object
const {name} = person;
console.log(name);