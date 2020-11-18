// task1
const numbers = [2, 3, 4, 5];
let multiplNumbers = 1;

// using for
for (let i = 0; i < numbers.length; i++) {
  multiplNumbers *= numbers[i];
}
console.log(multiplNumbers);

// using while
let newMultipleBumbers = 1;
let i = 0;

while (i < numbers.length) {
  newMultipleBumbers *= numbers[i];
  i++;
}
console.log(newMultipleBumbers);

console.log("---------------------------------------------");

// task2
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    document.write(`${i} is even. `);
  } else {
    document.write(`${i} is odd. `);
  }
}

// task3
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500 + 1));
  }
  console.log(arr);
}
randArray(10);

console.log("---------------------------------------------");

// task4
function raiseToDegree(a, b) {
  a = parseInt(prompt("Enter an integer number a."));
  b = parseInt(prompt("Enter an integer number b."));

  return a ** b;
}
const numbInDegree = raiseToDegree();
console.log(numbInDegree);

console.log("---------------------------------------------");

// task5
function findMin(...arr) {
  return Math.min(...arr);
}
console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin(0, 144, 44, 0.5, 1990, 19, 195));

console.log("---------------------------------------------");

// task6
const findUnique = function (arr) {
  let resultArray = arr.filter((cur, ind) => {
    return arr.indexOf(cur) === ind;
  });
  let result;
  if (resultArray.length < arr.length) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(findUnique(array));

console.log("---------------------------------------------");

// task7
function returnLastElement(arr, last = 1) {
  return arr.slice(-last);
}

console.log(returnLastElement([1, 19, 15, 4, -2], 2));

console.log("---------------------------------------------");

// task8
const string = "i love java script";

function makeCapitalLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(makeCapitalLetters(string));
