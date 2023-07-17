function ReturnBool(org,rev) {
  if (org == rev) {
      return "They are Palindrome";
  }
  else {
      return "They aren't Palindrome";
  }
}

function ReturnReverse(org) {
    var SplitString = org.split("");
    var ReverseArray = SplitString.reverse();
    var ReverseString = ReverseArray.join("");
    return ReverseString;
}

var word = String(prompt("Enter a String: "));
var info = ReturnBool(word,ReturnReverse(word));
console.log(info);
