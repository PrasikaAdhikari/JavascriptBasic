// // // alert("Hello World from JS");
// // // console.log("This is the console log.");
// // // console.log("This is the console test message.");

// // // : sINGLE LINE COMMENT
// // /*  MULTI LINE COMMENT */
// // //Non-primitive data type

// // // let person = {
// // //     name: "ram",
// // //     age: 30,
// // // };
// // // console.log(person);
// // // console.log(person.name);
// // function area(r) {
// //   return 3.15 * r * r;
// // }
// // //Array
// // let numbersList = ["Apple", "Ball", "Cat"];
// // console.log(numbersList[0]);
// // //for getting datatype ; array is object.
// // console.log("numberList", typeof numbersList);
// // console.log(typeof area);

// // //Math Objects
// // const piValue = Math.PI;
// // console.log(piValue);
// // console.log(Math.round(2.6));
// // console.log(Math.pow(4, 2));
// // console.log(Math.ceil(4.4));
// // console.log(Math.sqrt(4, 2));
// // console.log(Math.floor(4.7));
// // console.log(Math.random()); //Generates random variables every time you load the webpage.

// // //Condition Statements
// // let price = 100;
// // let quantity = 10;

// // let MAX_PURCHASE = 1000;
// // let MIN_PURCHASE = 100;
// // let totalPrice = price * quantity;
// // if (totalPrice > MAX_PURCHASE) {
// //   console.log("TOO EXPENSIVE");
// // } else if (totalPrice > MIN_PURCHASE) {
// //   console.log("dont cheap out");
// // } else {
// //   Console.log("buyit!!");
// // }

// // //switch
// // let menu = "home";
// // switch (menu) {
// //   case "home":
// //     console.log("WELCOME HOME");
// //     break;
// //   case "garden":
// //     console.log("WELCOME garden");
// //     break;
// //   default:
// //     console.log("Where you?");
// // }
// // //try catch
// // //
// // try {
// //   const test1 = 100;
// //   test1 = 1000;
// //   console.log(test1);
// // } catch (error) {
// //   console.log("There is an error");
// //   console.log(error);
// // } finally {
// //   console.log("FINALLY");
// // }
// // console.log("AFTER BLOCK");

// //FOR LOOP

// console.log("for loop");
// for (let i = 0; i < 10; i = i + 2) console.log(i);

// //While loop

// //Checks the condtion only
// console.log("While"); //just writing the header
// let x = 1;

// while (x < 10) {
//   //run this block
//   console.log(x);
//   x = x + 2;
// }

// //Do while condition

// console.log(" DO while");
// let y = 10;
// do {
//   console.log(y);
//   y = y + 2;
// } while (y < 10);

// // for in

// let person = {
//   // key : value. person is the object
//   name: "Ram",
//   age: 30,
// };
// //
// console.log("For in");
// for (let key in person) {
//   if (key == "name") {
//     console.log("name:", person[key]);
//   }
// }

// //for of
// console.log("For of");
// let arrayList = [1, 2, 3, 4, 5];
// for (let item of arrayList) {
//   console.log(item);
// }
// console.log("Normal For");
// for (let i = 0; i < arrayList.length; i = i + 1) {
//   console.log(arrayList[i]);
// }

// //array can have muliple data type

// //BREAK

// console.log("break");
// for (i = 0; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// } //output: 0,1 2

// //Continue
// console.log("Continue");
// for (i = 0; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// } // Output: 0,1,2,4

// //Number
// let num1 = Number(1233);
// let value1 = "123";
// let num2 = Number(value1);
// console.log(typeof value1);
// console.log(typeof num2);

// // if (num2 == Number.NaN) {

// if (Number.isNaN(num2)) {
//   console.log("The number was not a number");
// } else {
//   console.log("It is a number");
// }
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// //finite
// console.log("FInite");
// console.log(Number.isFinite(100 / 2));

// //parse Function

// console.log("PARSE VALUE");
// console.log(parseInt("10.5"));
// console.log(parseFloat("10.5"));
// //radix number is 2, that is binary, 11 is 3 in binary. 2 and 16 is the base
// console.log(parseInt("11", 2));
// console.log(parseInt("A", 16));

// //escape character
// console.log("ESCAPE CAHRACTER");
// // let stringVariable = '"';
// // / escapes character
// // let stringVariable = '/"';

// let stringVariable = "First\nName";
// // n gives new line and /t gives a tab space
// console.log(stringVariable);

// //length
// let lenString = "APPLE";
// console.log(lenString.length);
// for (i = 0; i < lenString.length; i++) {
//   console.log(lenString[i]);
//   // i is going to behave as an Array
// }

// //index of array
// console.log("index of array");
// console.log(lenString.indexOf("L"));

// console.log(lenString.indexOf("P"));
// //last index of P, since there is  two P's
// console.log(lenString.lastIndexOf("P"));
// console.log(lenString.indexOf("PLE"));

// //search
// console.log("Search");
// console.log(lenString.search(/PLE/));

// //Slicing
// console.log("Slicing");
// let exampleString = "dented code academy";
// //includes value from 7 till 9, to write academy just 12
// console.log(exampleString.slice(12));

// //Substring
// //To know the indexes
// console.log(exampleString.substring(12, 16));

// //how many numbers you want
// console.log(exampleString.substr(12, 4));

// //Replace function
// console.log("Replace function");
// console.log(exampleString.replace("academy", "institute"));

// //Concat
// console.log("Concat");
// let firstName = "John";
// let lastName = "Doe";
// console.log(firstName.concat(lastName));

// console.log("Trimstring");
// //TrimString

// let trimString = "00000HelloWorld0000";
// console.log(trimString.trim());

// //cases
// console.log("Cases");
// console.log(trimString.toLowerCase());
// console.log(trimString.toUpperCase());

// //character
// console.log("character");
// console.log(trimString.charAt(6));

// console.log(trimString.trim().toUpperCase());

// //bracket notation, instead of using char at you can use bracket notation
// console.log("Bracket Notation");
// let csv = "Apple, Ball, Cat";
// let array1 = ["Apple", "ball", "cat"];
// let array2 = csv.split(",");
// console.log(array2);
// console.log(array2.join(";"));

// //Array
// console.log("Array Length");
// let exampleArray = [1, 2, 3];
// console.log(exampleArray.length);

// //stack is FILO (First In Last Out)
// console.log("Array Properties and Method");
// exampleArray.push(4, 5);
// console.log(exampleArray);

// exampleArray.pop();
// console.log(exampleArray);

// exampleArray.shift();
// console.log(exampleArray);

// exampleArray.unshift(0);
// console.log(exampleArray);

// console.log(exampleArray.toString());
// console.log(exampleArray.slice(1, 3));

// //splicing is add an element to the array and cutting the element; cutting and adding an element to the array.

// exampleArray.splice(2, 1, 7, 8, 9, "a", "b");
// //value of example array changes
// console.log(exampleArray);

// //sort
// console.log("sort");
// let sortArray = [101, 105, 85, 111, 1];
// //this sorts according to the string value
// //you can sort if you use alphabetical order, but with numerics its different.
// console.log(sortArray.sort());
// console.log(sortArray.reverse());

// //forEach //call-back function
// console.log("forEach");
// sortArray.forEach((element) => {
//   console.log(element);
// });
// // //mapping
// // // console.log("Mapping");
// // let mapArray = [1, 2, 3, 4,5,6];

// // // function doubleFunction(item) {
// // //   return item * 2;
// // // }
// // // let doubleArray = mapArray.map(item >= item);
// // // console.log(doubleArray);

// // //filter
// // function onlyEven(3) {
// //   return item % 2 == 0;
// // }
// // console.log(onlyEven(3));
// // let filterArray = mapArray.filter(onlyEven);

// let mapArray = [1, 2, 3, 4, 5, 6];
// let multiplication = 1;
// for (let item of mapArray) {
//   multiplication = multiplication * item;
// }
// console.log(multiplication);
// function reduceFunction(accumulator, item) {
//   return accumulator * item;
// }

// // console.log;

// // //reduce function
// // let sum_reduce = mapArray.reduce(reduceFunction, 1);
// // console.log(sum_reduce);

// // let evenFunction = [2, 4, 6];
// // let allEven = evenFunction.every(onlyEven);
// // console.log(allEven);

// //template literals
// //back ticks: allow for multi-line strings
// console.log("Template Literals");
// let fName = "John";
// let lName = "Doe";
// let message = "Hi! my name is " + fName + " " + lName + "\n Nice to meet you";
// console.log(message);
// // $ whatever is included in the dollar sign is a variable
// let literalMessage = `Hi! my name is ${fName}${lName}
// Nice to meet you`;
// console.log(literalMessage);

// //create an array of 100 random numbers range between 1 to 100 programmatically.
// //Listing out function
// //array push
// //(Math.floor(Math.random() * 100)) + 1;Generate a random number between 0 and 1
// //for loop 0-99

// // console.log("Array  Challenge");
// let randomArray = [];
// for (i = 1; i < 100; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNumber);

//   randomArray.push(randomNumber);
// }
// console.log(randomArray);

// let randomA = [];
// for (i = 1; i < 50; i++) {
//   let randomNum = Math.floor(Math.random() * 100) + 1;
//   while (randomA.includes(randomNum)) {
//     randomNum = Math.floor(Math.random() * 100) + 1;
//   }
//   randomA.push(randomNum);
//   // console.log(randomNum);
// }
// console.log(randomA);

// //odd array
// //even array
// function evenNumber(item) {
//   return item % 2 == 0;
// }
// function oddNumber(item) {
//   return item % 2 == 1;
// }
// let evenArray = randomArray.filter(evenNumber);
// let oddArray = randomArray.filter(oddNumber);
// console.log(oddArray);
// console.log(evenArray);

let meters = 100;
let km = meters * 1000;
console.log(km);

let meter1 = 101;
let kilometer1 = meter1 * 1000;
console.log(kilometer1);

//Function Declaration
// function functionName(parameters){
//   //code to be executed
// }

function meterToKilometer(meterUnit) {
  console.log(meterUnit * 1000); //not needed this line
  return meterUnit * 1000;
}
let a = meterToKilometer(90);
console.log("Value of A: ", a);
meterToKilometer(90);
meterToKilometer(200);
meterToKilometer(200);

function areaOfRectangle(length, breadth) {
  return length * breadth;
}
console.log(areaOfRectangle(10, 20));

//Function expression

// const functionName= function(parameters){
//   //code to be executed
// }

console.log(areaOfRectangle(10, 20));

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;
};
console.log(areaOfCircle(100));

const volumeOfPyramid = (length, height) => {
  return (1 / 3) * length * length * height;
};
console.log(volumeOfPyramid(10, 20));

//Temperature converter Function
//convert celsius to fahrenheit

const fahrenheit = (C) => {
  return (9 * C) / 5 + 32;
};
console.log(fahrenheit(1));

//To find the volume of the cuboid
const cuboid = (length, breadth, height) => {
  return length * breadth * height;
};
console.log(cuboid(2, 2, 2));

//Immediate Invoked Function
// (function(){
//code to be executed
// })();

(function () {
  console.log("Immediate");
})();

//function with default params
