/*Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.*/
function ReturnCentury(year) {
  return Math.floor((year-1)/100+1);
}

var year = parseInt(prompt("Enter Year: "));
var century = ReturnCentury(year);
console.log("Century is " + century);
