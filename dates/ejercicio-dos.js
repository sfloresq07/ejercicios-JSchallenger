// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction (a, b){
let betweenDates = a.getTime() - b.getTime()
let dates =  Math.ceil(betweenDates /(( 1000 * 3600 * 24 ) ))
if ( dates < 0){
    dates = dates * -1
} return dates
} 
console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')))