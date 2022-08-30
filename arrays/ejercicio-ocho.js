// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
   let negative =  a.filter(value => value < 0)
   return negative.length
    }
console.log(myFunction([4,-3,2,1,0]));