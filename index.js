// Task #1 - Walk Generator
function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let ns = 0,
    ew = 0;

  for (let dir of walk) {
    switch (dir) {
      case "n":
        ns++;
        break;
      case "s":
        ns--;
        break;
      case "e":
        ew++;
        break;
      case "w":
        ew--;
        break;
    }
  }

  return ns === 0 && ew === 0;
}

// Task #2 - Remainder Function
function remainder(n, m) {
  if (n === 0 || m === 0) return NaN;
  return Math.max(n, m) % Math.min(n, m);
}

// Task #3 - String Combination
function combineStrings(str1, str2, str3) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i] + str3[i];
  }
  return result;
}

// Task #4 - Acronym Generator
function generateAcronym(name) {
  if (!name) return "";

  const parts = name.split(" ");
  let acronym = "";

  const firstName = parts[0];
  if (firstName.includes("-")) {
    const firstNames = firstName.split("-");
    acronym += firstNames.map((n) => n.charAt(0).toUpperCase()).join("");
  } else {
    acronym += firstName.charAt(0).toUpperCase();
  }

  if (parts.length === 3 && !parts[2].toLowerCase().startsWith("von")) {
    acronym += parts[1].charAt(0).toUpperCase();
  }

  const lastName = parts[parts.length - 1];
  if (lastName.toLowerCase().startsWith("von")) {
    acronym += "v" + lastName.split(" ")[1].charAt(0).toUpperCase();
  } else if (lastName.includes("-")) {
    const lastNames = lastName.split("-");
    acronym += lastNames.map((n) => n.charAt(0).toUpperCase()).join("");
  } else {
    acronym += lastName.charAt(0).toUpperCase();
  }

  return acronym;
}

// Export functions for testing
module.exports = {
  isValidWalk,
  remainder,
  combineStrings,
  generateAcronym,
};
