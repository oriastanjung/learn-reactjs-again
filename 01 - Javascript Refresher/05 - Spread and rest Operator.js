// spread and rest using ...
// spread is to copy old data to new var
const number = [1,2,3];
const newNumb = [...number, 4,5,6];
console.log(newNumb);

const obj1 = {
    name:"orias"
}
const newObj = {...obj1, age: 27}
console.log(newObj);

//rest operator is to use as many argument in function and use it as array

function restTest(...args){
    console.log(args);
    args.sort()
    console.log(args);
}

restTest(1,3,5,2,0,9);