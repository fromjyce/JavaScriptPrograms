//Return sum of two numbers
function ReturnSum(num1, num2) {
  return num1 + num2;
}

var num1 = parseInt(prompt("Enter Number One: "));
var num2 = parseInt(prompt("Enter Number Two: "));
var sum = ReturnSum(num1, num2);
console.log("Sum is " + sum);
