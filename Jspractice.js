// let array1 = [1, 2, 3, 4];

//1. Initialize the sum variable
// 2. Loop through all the items of the array
// 3. Add the items to the sum variable.
//4. Get the final value of sum variable.

//Trying pseudo codes

// sum =0
// for{
// i = 0, i<arrays1.length, i++
// sum = sum+array1[i]}
// print(sum)

// let sum = 0;
// for (let i = 0; i < array1.length; i++) {
//   sum += array1[i];
// }

// console.log(sum);

//reduce no need length
// const reduceFunction = (acc, item) => {
//   return acc + item;
// };
// let reduced_sum = array1.reduce(reduceFunction, 0);
// console.log(reduced_sum);
//multiplication
//initialise multiplication variable by 1
//loop through all of the items in array
// multiply current item to the multiplication var
//get the final multiplication

// let mul = 1;
// for (let i = 1; i < array1.length; i++) {
//   mul = mul * array1[i];
// }
// console.log(mul);

//Reversing a string
// let array = [1, 2, 3];
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(i, array[i]);
// }

//Reversing Applu string
//Initialising the empty variable to reverse the string.
//loop through the length of the string in the reverse order.
// Add the current character to reverse variable.
//Display the reverse variable.
// let array = ["Apple"];
// let revarray = [""];
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(i, array[i]);
//   revarray += array;
// }
// console.log(revarray);

//Using the function

//ADD SUM function
// let a = 100;
// let b = 200;
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(a, b));

//Palindrome
//Create a function that gives me a boolean value if a string is boolean value or not

//Declare the value
//Check if the value is same or not
// for looop ma if the reverse is same as the original print yes

// function sum(a, b, c) {
//   return a + b;
// }

// sum(1, 2);

// sum(100, 200, 300);

// sum(1, 2, 3);

// let stringVar = "racecar";

//Check if the value is same or not (Palindrome checker)
// const reverseString = (stringInput) => {
//   let reverse = "";
//   for (let i = stringInput.length - 1; i >= 0; i--) {
//     reverse += stringInput[i];
//   }

//   return reverse;
// };

// const palindromeChecker = (ip) => {
//   let reverse = reverseString(ip);

//   if (ip === reverse) {
//     return true;
//   } else {
//     return false;
//   }

// };

// console.log(palindromeChecker("townhouse"));

//Print all the factors of a number

// 1. Get input of the number
// 2. Loop through all the numbers to 1 to n.
// 3. Divide n by current number.
// 4. If the remainder is 0, it is a factor else it is not.

// const factorVariable = (num) => {
//   for (let i = 1; i <= num; i++) {
//     let remainder = num % i;

//     if (remainder == 0) {
//       console.log(i);
//     }
//   }
// };
// console.log("Factors");
// factorVariable(10);

//Converting to Array
// const factorVariable = (num) => {
//   let factors = [];
//

// };
// console.log("Factors");
// let factorList = factorVariable(11);
// console.log(factorList);

//Largest Numner in Array
// Create a function to return the largest numner from an array

// let numbers = [100, 200, 300, 10, 1000];

// const largeNum = (num) => {
//   let largestNumber = 0;

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > largestNumber) {
//       //   console.log(num);
//       largestNumber = num[i];
//     }
//   }

//   return largestNumber;
// };

// console.log(largeNum(numbers));

//Function declaration
// let numbers = [100, 200, 300, 10];
// const smallnum = (num) => {
//   let smallnum = 1000;
//   for (let i = 0; i < num.length; i++) {
//     if (smallnum > num[i]) {
//       smallnum = num[i];
//     }
//   }
//   return smallnum;
// };
// console.log(smallnum(numbers));

// Check if Prime Numbers or not

// Define a function with input num
// For loop from 2 to num
// If num divided by current number == 0 return false
// finally if num is not divided by any other number return true.

// const prime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//     return true;
//   }
// };
// console.log(prime(13));

// //Displaying numbers, by calling the functoion from the above.
// console.log("Print prime numbers from 1 to 100");
// for (i = 1; i <= 100; i++) {
//   if (prime(i)) {
//     console.log(i);
//   }
// }

// Factorials of numbers
// 5! = 5*4*3*2*1
// const factorialNum = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// };
// console.log(factorialNum(4));

//Multiplication table for a number from 1 to 10;

// input num
//loop from 1 to 10
// multiply and display current item with num
// const mulTable = (num) => {
//   let mulArray = [];
//   for (let i = 1; i <= 10; i++) {
//     let multi = num * i;
//     console.log(num + "x" + i + "=" + num * i);
//     mulArray.push(num * i);
//   }
//   return mulArray;
// };
// console.log(mulTable(3));

const mulTable = (num) => {
  let counter = 1;
  while (counter <= 10) {
    console.log(num + "x" + counter + "=" + num * counter);
    counter++;
  }
};
console.log(mulTable(3));
