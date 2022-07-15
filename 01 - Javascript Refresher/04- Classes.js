class Gender {
    gender = 'Default';
    
    printGender = () =>{
        console.log(`gender = ${this.gender}`);
    }
}
// inheritance using extends keyword

class Person extends Gender{
    constructor(name , age,gender){
        super();
        this.name = name;
        this.age = age;
        //set the parent attribute
        this.gender = gender
    }

    printData = () =>{
        console.log(`name = ${this.name}`);
        console.log(`age = ${this.age}`);
    }
}


// calling a class and create new objcet
// const object = new ClassName();

const person1 = new Person("orias", 27,"male");
const person2 = new Person("sario", 33,"female");
person1.printData();
person1.printGender();
console.log('\n');
person2.printData();
person2.printGender();
