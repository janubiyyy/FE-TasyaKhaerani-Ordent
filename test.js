const {
  isValidWalk,
  remainder,
  combineStrings,
  generateAcronym,
} = require("./index.js");

// Test Task #1
console.log("Testing Task #1 - Walk Generator:");
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"])); // true
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n"])
); // false

// Test Task #2
console.log("\nTesting Task #2 - Remainder Function:");
console.log(remainder(17, 5)); // 2
console.log(remainder(13, 72)); // 7
console.log(remainder(0, -1)); // NaN
console.log(remainder(0, 1)); // NaN

// Test Task #3
console.log("\nTesting Task #3 - String Combination:");
console.log(combineStrings("aa", "bb", "cc")); // "abcabc"
console.log(combineStrings("abc", "def", "ghi")); // "adgbehcfi"

// Test Task #4
console.log("\nTesting Task #4 - Acronym Generator:");
console.log(generateAcronym("Thomas Meyer")); // "TM"
console.log(generateAcronym("martin schmidt")); // "MS"
console.log(generateAcronym("Jan-Erich Schmidt")); // "JES"
console.log(generateAcronym("Paul von Lahnstein")); // "PvL"
console.log(generateAcronym("Martin von Lahnstein-Meyer")); // "MvLM"
