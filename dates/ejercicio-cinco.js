// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
    if (Date.parse(a) < Date.parse(b)){
        return true
    }else{
        return false
    }
  
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))