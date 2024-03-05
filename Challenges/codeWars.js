// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not
function friend(friends) {
  return friends.filter((friend) => friend.length == 4);
}
const friends = friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
console.log(friends); //["Ryan"]

//String Ends With?
//1.
function solution(str, ending) {
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
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "gde"));
