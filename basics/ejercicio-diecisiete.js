// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
  if (x % y === 0) {
    return x;
  } else {
    for (i = x + 1; i > x; i++) {
      if (i % y === 0) {
        return i;
      }
    }
  }
}

console.log(myFunction(-5, 7));
