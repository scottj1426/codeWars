// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  x = x.replace(/\s/g, "");
  return x;
}

//     //Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write the following function to help Leo out:

// function howManyGifts(maxBudget, gifts)
// The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// NOTE: All numbers will be integers >= 0, and the array will never be empty.

function howManyGifts(maxBudget, gifts) {
  var count = 0;
  var sum = 0;

  gifts.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < gifts.length; i++) {
    sum = sum + gifts[i];

    if (sum <= maxBudget) {
      count = count + 1;
    }
  }

  return count;
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump/mpg <= fuelLeft;
  };


//   You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// In ruby:

// list1 = [
//   { first_name: 'Noah', last_name: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { first_name: 'Maia', last_name: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { first_name: 'Shufen', last_name: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { first_name: 'Sumayah', last_name: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ]
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

return list
.filter(dev => dev.language === "JavaScript")
.filter(dev => dev.continent === "Europe")
.length

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(inputArray) {
  var arr = [];

  if( inputArray.length == 1){
    return inputArray;
  }
  var longestWord = inputArray.sort(function(a, b) {
   return b.length - a.length;
  });
  var lengthOfLongestWord = longestWord[0].length;//returns length of longest word


  for(var i = 0; i < longestWord.length; i++){
   if(longestWord[i].length == lengthOfLongestWord){
     newarr.push(longestWord[i]);
   }
  }

  return arr;
  }