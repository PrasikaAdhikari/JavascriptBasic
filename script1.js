//OBJECTS

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  gender: "Female",
  address: {
    streetNumber: 10,
    suburb: "Townhall",
    state: "NSW",
    postcode: 2000,
  },
  email: "jane@gmail.com",
  isMarried: false,
  children: [
    {
      name: "Child1",
      age: 2,
    },
    {
      name: "Child2",
      age: 3,
    },
  ],
  greet: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
  showmetheChildren: function () {
    for (let child of this.children) {
      console.log(child.name, child.age);
    }
  },
};
console.log("OBJECT");
console.log(person.age);
console.log(person["isMarried"]);
console.log(person.greet());
console.log(person.children);
// console.log(showmetheChildren);
for (let child of person.children) {
  console.log(child.name, child.age);
}

//this keyword is the object itself

const animal1 = {
  name: "cat",
  legs: 4,
  sound: "meow",
  color: "black",
  greet: function () {
    console.log(this.name);
  },
};

const animal2 = {
  name: "dog",
  legs: 5,
  sound: "bow",
  color: "white",
  greet: function () {
    console.log(this.name);
  },
};

let animalList = [animal1, animal2, "3"];

const getAreat = function () {
  console.log("EXECUTING TEST");
};

console.log("GREET");
console.log(animal1.greet());
console.log(animal2.greet());

console.log(getAreat());

for (let item of animalList) {
  console.log(item);
}
//Object Destructuring
const animal = {
  name: "tommy",
  breed: "dog",
  age: 100,
};
// let name = animal.name;
// let breed = animal.breed;
//let age = animal.age;
//Instead of above lines of code you can use the code below.
let { name, age, breed } = animal;
console.log(name, age);

//Date Object

let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());

let newDate = new Date("2025-05-6");
console.log(newDate);
console.log(newDate.getMonth());
