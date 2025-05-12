// //Callback Function

// // const addFunction = (a, b) => {
// //   return a + b;
// // };
// // const multiplyFunction = (a, b) => {
// //   return a * b;
// // };
// // const operationFunction = (a, b, func1) => {
// //   return func1(a, b);
// // };

// // console.log(operationFunction(10, 20, addFunction));
// // console.log(operationFunction(10, 20, multiplyFunction));

// // let num_object = {
// //   a: 100,
// //   b: 200,
// //   sort: function (ipFunction) {
// //     return ipFunction(this.a, this.b);
// //   },
// // };
// // console.log(num_object.sort(multiplyFunction));
// // console.log(
// //   num_object.sort((a, b) => {
// //     return (a / 2) * (b / 2);
// //   })
// // );

// // let numbers = [40, 1, 2, 100];
// // numbers.sort((a, b) => b - a);
// // console.log(numbers);

// //Calling a funtion inside an object should be called by using the word function and not an arrow function

// // let cars = [
// //   { make: "Toyota", year: 2005 },
// //   { make: "Honda", year: 2010 },
// //   { make: "Ford", year: 1995 },
// // ];
// // cars.sort((a, b) => a.year - b.year);
// // console.log(cars);

// //JS object
// // let personObject = {
// //   name: "John",
// //   age: "test",
// // };
// // console.log(personObject);
// // console.log(typeof personObject);

// // //JSON
// // //Converting JS object to JSON
// // let jsonString = JSON.stringify(personObject);
// // console.log(jsonString);
// // console.log(typeof jsonString);

// //Parse
// // // Convertingone object to another
// // let parsedJson = JSON.parse(jsonString);
// // console.log(parsedJson);

// //Object destructuring
// // let a1 = [1,2,3];
// // let a = a1[0];
// // let a1 = [1, 2, 3];
// // let [a, b, c] = a1;
// // console.log(a, b, c);

// // let person = {
// //   firstName: "Person1",
// //   lastName: "lastName",
// // };
// // let { firstName, lastName } = person;
// // console.log(firstName, lastName);
// // const [a, b, c] = [1, 2, 3];

// //Spread Operator
// let firstVar = 100;
// let secondVar = firstVar;
// firstVar = 200;
// console.log(firstVar, secondVar);

// let pObj = {
//   firstName: "ram",
//   secondName: "Shyam",
// };

// //shallow copy : copying the reference only,
// // if the original changes all ofthe things are going to get changed
// let bObj = pObj;
// // pObj.firstName = "Hari";

// console.log(pObj);
// console.log(bObj);

// //deep copoy
// //the original is going to stay the same.

//Counting vowels in the string

// declare what vowel is
// input your word
// check if the word consists vowel or Not-
// if yes, then add on the numbers
//Have showcased two different methods here
// const countVowel = (ipString) => {
//   let vowelCounter = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   //loop through the character of the string
//   for (let i = 0; i < ipString.length; i++) {
//     //check if the current index character is a vowel or not.
//     newFunction(i);
//   }

//   return vowelCounter;

//   function newFunction(i) {
//     if (vowels.includes(ipString[i])) {
//       // if (ipString[i] == "a" ||
//       //     ipString[i] == "e" ||
//       //     ipString[i] == "i" ||
//       //     ipString[i] == "o" ||
//       //     ipString[i] == "u") {
//       vowelCounter += 1;
//     }
//   }
// };

// console.log("Vowel Character");
// console.log(countVowel("Hello world"));

//Removing the duplicates

const dupNum = (num) => {
  let numbers = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9];
  return dupNum;
};
