function hasTargetSum(array, target) {
  const seenNumbers ={}
  for (const number of array) {
    const difference = target - number
    if (difference in seenNumbers) return true
      else seenNumbers[number] = true
    }
    return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create object to hold seen numbers
  itterate through numbers.
    for each num create a difference with the target number
    check to see if any of the numbers in our created object is the dif
      if yes, return true
      if no, add num to the object of seen numbers
  if no differences are in the seen numbers object return false
*/

/*
  Add written explanation of your solution here
  Subtract first number in array from the Target number.
  Iterate through remaining numbers and return true if any of them equal the Difference.
  Do this with remaining numbers in array.
  If none of the numbers equal the Difference, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
