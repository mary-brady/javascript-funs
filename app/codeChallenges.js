export function pastMidnight(h, m, s) {
  if (h == 0 && m == 0 && s == 0) {
    return 0;
  }
  const hoursToSeconds = h * 60 * 60;
  const minsToSeconds = m * 60;
  const totalSeconds = hoursToSeconds + minsToSeconds + s;
  return totalSeconds * 1000;
}

/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.
*/
export function friend(friends) {
  return friends.filter((friend) => friend.length == 4);
}
console.log("friend", friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); //["Ryan"]

//String Ends With?
//1.
export function strEndsWith(str, ending) {
  if (ending.length > str.length) {
    return false;
  }
  const strArr = str.split("");
  let newArr = [];
  let newStr = "";
  for (let i = 1; i <= ending.length; i++) {
    newArr.push(strArr[strArr.length - i]);
  }

  newStr = newArr.reverse().join("");
  return newStr == ending;
}

//2.
export function strEndsWith2(str, ending) {
  return str.endsWith(ending);
}

console.log("strEndsWith", strEndsWith2("abcde", "gde"));

/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/

export function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    const sorted = [a, b].sort((a, b) => a - b);
    var n = sorted[1] - sorted[0] + 1;
    var sum = (n * (sorted[0] + sorted[1])) / 2;

    return sum;
  }
}
console.log("getSum", getSum(5, 2));

/* 
Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out 
*/
export function filterList(list) {
  return list.filter((l) => typeof l !== "string" && !isNaN(l));
}
console.log("filterList", filterList([1, 2, "aasf", "1", "123", 123])); //[1,2,123]

/* 
Convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. 
*/
String.prototype.toJadenCase = function (str) {
  const stringArr = this.valueOf().toLowerCase().split(" ");
  for (let i = 0; i < stringArr.length; i++) {
    let letter = stringArr[i][0].toUpperCase();
    stringArr[i] = letter + stringArr[i].slice(1);
  }

  return stringArr.join(" ");
};

console.log("Jaden", "blah blah yay blah".toJadenCase());

/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present 
*/
export function spinWords(str) {
  let returnString = str;

  if (str.includes(" ")) {
    let stringArr = str.split(" ");
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length >= 5) {
        stringArr[i] = stringArr[i].split("").reverse().join("");
      }
    }
    returnString = stringArr.join(" ");
  } else {
    if (str.length >= 5) {
      returnString = str.split("").reverse().join("");
    }
  }
  return returnString;
}
console.log("spinWords", spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"

/* 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. 
If n < 0 or m < 0 return 0 
*/
export function paperwork(classMates, pages) {
  return classMates < 0 || pages < 0 ? 0 : classMates * pages;
}

/* 
We will consider [a, e, i, o, u] as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces
*/

export function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const newArr = str.split("");
  let vowelCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (vowels.includes(newArr[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
export function isPangram(string) {
  const strArr = string.toLowerCase().split("").sort();
  const punct = ["''", ",", ":", "-", "?", ".", " "];
  const alphArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (isNaN(parseInt(strArr[i]))) {
      if (!punct.includes(strArr[i])) {
        if (!alphArr.includes(strArr[i])) {
          alphArr.push(strArr[i]);
        }
      }
    }
  }
  return alphArr.length == 26;
}
