function isPalindrome(s) {
  var noSpaces = s.split(" ").join("");
  var stringReverse = noSpaces.split("").reverse().join("");

  return noSpaces == stringReverse;
}

module.exports = isPalindrome;
console.log(isPalindrome("a man a plan a canal panama"));