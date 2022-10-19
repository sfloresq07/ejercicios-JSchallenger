// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction(a, b) {
    let hourInMilliseconds = 60 * 60 * 1000;

    let oneHourAgo = Date.now() - hourInMilliseconds;

    let diff = (a.getTime() - b.getTime());
    
    if( oneHourAgo <= diff){
        return true
    }else{
       return false
    }
  
    
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
