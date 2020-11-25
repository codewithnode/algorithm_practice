//in stack we have First in Last out order. Imagine a stack of books, The first one you pick up is the last one you placed.
//Stack has functions like Push Pop Length Peek
//First simulate stack in JS using Array.
//This example is to check Palindrome using array.

// Palindrome means the reverse of a string should be same as original word
let words = [];

let verificationString = "racecar";

//First put every element in an array, then reverse it

for (let i = 0; i < verificationString.length; i++) {
  words.push(verificationString[i]);
}

//logging the array

console.log(words);

//Reverese the string
let reversedString = "";
for (let i = 0; i < verificationString.length; i++) {
  reversedString += words.pop();
}

//logging reversed
console.log(reversedString);

//compare
if (reversedString == verificationString) {
  console.log("The original string is palindrome");
}
