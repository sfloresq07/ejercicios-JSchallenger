// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction(arr) {
    
       return arr.every(elem => arr[0] === elem)
    }

console.log(myFunction(['10',10,10,10]));