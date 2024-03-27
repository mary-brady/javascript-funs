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

// There is an array with some numbers. All numbers are equal except for one.
export function findUniq(arr) {
  let numDic = {};
  arr.forEach((n) => (numDic[n] = 0));
  for (let i = 0; i < arr.length; i++) {
    numDic[arr[i]] += 1;
  }

  for (let [k, v] of Object.entries(numDic)) {
    if (v === 1) {
      return Number(k);
    }
  }
}

/*
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also 
*/
function gimmeTheLetters(str) {
  const isUpper = str[0] === str[0].toUpperCase();
  let alphStr = "abcdefghijklmnopqrstuvwxyz";
  let alphArr = isUpper ? alphStr.toUpperCase().split("") : alphStr.split("");
  let strArr = str.split("-");

  const startInd = alphArr.indexOf(strArr[0]);
  const endInd = alphArr.indexOf(strArr[1]);

  return alphArr.slice(startInd, endInd + 1).join("");
}

/* 
Write a function that takes a string and return a new string with all vowels removed.
*/
export function disemvowel(str) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  const capVowelArr = ["A", "E", "I", "O", "U"];

  const strArr = str.split("");
  return strArr
    .filter((s) => !vowelArr.includes(s) && !capVowelArr.includes(s))
    .join("");
}

//Square every digit of a number and concatenate them.
export function squareDigits(num) {
  const numToStrArr = num.toString().split("");
  let numArr = [];
  numToStrArr.forEach((n) => numArr.push(Number(n) ** 2));
  return Number(numArr.join(""));
}

export function highAndLow(numbers) {
  let numArr = numbers.split(" ");
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = Number(numArr[i]);
  }
  return `${Math.max.apply(null, numArr)} ${Math.min.apply(null, numArr)}`;
}

/* 
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. 
*/
export function duplicateCount(text) {
  const textArr = text.toLowerCase().split("");
  let newDict = {};

  textArr.forEach((t) => (newDict[t] = 0));

  for (let i = 0; i < textArr.length; i++) {
    newDict[textArr[i]] += 1;
  }

  let numOfDoops = 0;
  for (const [k, v] of Object.entries(newDict)) {
    if (v > 1) numOfDoops++;
  }

  return numOfDoops;
}

/* 
Make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order.
*/
export function descendingOrder(n) {
  const numArr = String(n).split("").sort().reverse().join("");
  return Number(numArr);
}

/* 
return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/
export function getMiddle(s) {
  if (s.length < 2) {
    return s;
  }
  const strLength = s.length;
  const middleIndex = (strLength - 1) / 2;

  if (strLength % 2 == 0) {
    return s[strLength / 2 - 1] + s[strLength / 2];
  }

  return s[middleIndex];
}

/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */
export function isIsogram(str) {
  str = str.toLowerCase();
  const strArr = str.split("");
  let strDic = {};
  strArr.forEach((s) => (strDic[s] = 0));
  for (let i = 0; i < strArr.length; i++) {
    strDic[strArr[i]]++;
    if (strDic[strArr[i]] >= 2) {
      return false;
    }
  }
  return true;
}

/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
 */
export function pigIt(str) {
  const strArr = str.split(" ");
  const punct = [".", "!", "?"];
  for (let i = 0; i < strArr.length; i++) {
    if (!punct.includes(strArr[i])) {
      let wordArr = strArr[i].split("");
      let letter = wordArr.shift();
      strArr[i] = `${wordArr.join("")}${letter}ay`;
    }
  }
  return strArr.join(" ");
}

/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.
 */
export function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
 */
export function likes(names) {
  const verbiage = (names.length > 1 ? ` like` : ` likes`) + " this";
  if (names.length == 0) {
    return `No one${verbiage}`;
  }
  if (names.length == 1) {
    return names + verbiage;
  }
  if (names.length == 2) {
    return names.join(" and ") + `${verbiage}`;
  }
  if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]}${verbiage}`;
  }
  if (names.length > 3) {
    const nameArr = names.slice(0, 2);
    return nameArr.join(", ") + ` and ${names.length - 2} others` + verbiage;
  }
}
/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 */

export function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const firstThree = numbers.slice(3, 6).join("");
  const lastFour = numbers.slice(6, 10).join("");
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

/* 
implement a difference function which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
 */
export function arrayDiff(a, b) {
  if (b.length < 0) {
    return a;
  }
  return a.filter((num) => !b.includes(num));
}

/* 
Given a string s, your task is to return another string such that even-indexed 
and odd-indexed characters of s are grouped and the groups are space-separated. 
Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
 */
export function sortMyString(S) {
  let newStr = "";
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 == 0) {
      arr.push(S[i]);
    } else {
      arr2.push(S[i]);
    }
  }
  newStr = `${arr.join("")} ${arr2.join("")}`;
  return newStr;
}

/* 
Write a function that takes an integer number n and a (possibly empty) list of integers and 
returns a list of every nth element of the input list (which possibly is the empty list).
If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list. 
*/
export function each(n, xs) {
  let returnArr = [];
  if (n == 0 || xs.length == 0 || n > xs.length) {
    return [];
  }

  if (n == -1) {
    return xs.reverse();
  }
  if (n == 1) {
    return xs;
  }

  if (n < 0) {
    let count = 0;
    for (let i = xs.length - 1; i >= 0; i--) {
      count--;
      if (count == n) {
        returnArr.push(xs[i]);
        count = 0;
      }
    }
  } else {
    count = 0;
    xs.forEach((x) => {
      count++;
      if (count == n) {
        returnArr.push(x);
        count = 0;
      }
    });
  }
  return returnArr;
}
