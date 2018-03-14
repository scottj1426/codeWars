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