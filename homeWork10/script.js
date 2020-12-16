// task1
let arr = ["Tom", "Sam", "Ray", "Bob"];

let [x, y, , ...z] = arr;

console.log(x);
console.log(y);
console.log(z);

console.log("----------------------------------------------");
/********************************************************** */

// task2

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

console.log("----------------------------------------------");
/********************************************************** */

// task3
mul = (...rest) => {
  let newRest = [];

  for (let i = 0; i < rest.length; i++) {
    if (Number(rest[i])) {
      newRest.push(rest[i]);
    }
  }
  const endSum = newRest.reduce((startEl, currentEl) => {
    return startEl * currentEl;
  }, 1);

  if (endSum === 1) {
    return 0;
  } else {
    return endSum;
  }
};

console.log(mul(1, "g", true, 5, 7, "g", null, 2));

console.log("----------------------------------------------");
/********************************************************** */

// task4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);

console.log(client.result);
console.log(typeof client.result);

/*замінив Function на стрілкові тільки в функціях колбеках, щоб пропустити this
Якщо замінив би ще в самих методах об'єктів, this випустив би в window object, що
призвело б до помилки*/

console.log("----------------------------------------------");
/********************************************************** */

// task5
const keys = [1, 2, 3, 4];
const values = ["div", "span", "h1", "b"];

mapBuilder = (keysArray, valuesArray) => {
  const map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
};

let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2));
