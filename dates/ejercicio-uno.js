// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {

    if (a.getTime() == b.getTime()) {
      return true
    } else {
      return false
    }
    
  }

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))