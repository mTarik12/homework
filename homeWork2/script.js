// task1
let x = 1;
let y = 2;

let res1 = String(y ** 2 * (x + y));
console.log(res1);
console.log(typeof res1);

let res2 = String(Boolean(x) + String(y));
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + String(y));
console.log(res3);
console.log(typeof res3);

let res4 = Number(Boolean(x) + String(y));
console.log(res4);
console.log(typeof res4);

console.log('-------------------------------------------');

// task2
let number = parseFloat(prompt('Please, enter any number.'));

// a
if (number % 2 === 0 && number > 0) {
    console.log(`${number} is an even positive number`);
};

// b
if (number % 7 === 0) {
    console.log(`${number} is multiple of 7`);
} else {
    console.log(`${number} is NOT multiple of 7`);
};

console.log('-------------------------------------------');

// task 3
let array = [];
array[0] = 25;
array[1] = 'Taras';
array[2] = true;
array[3] = null;

document.write(array.length);

let anyValue = prompt('Write here any value.', 'My name is...');
array.push(anyValue);
alert(array[4]);

array.shift();
document.querySelector('.main').textContent = array;

// task4
const friends = ['Jone', 'Jane', 'Luk'];

const newFriends = friends.join('*');
console.log(newFriends);

console.log('-------------------------------------------');

// task 5
const isAdult = parseInt(prompt('How old are you?', 'Write your age.'));
if (isAdult >= 18) {
    alert('You are full aged.');
} else if (isAdult <= 10 && isAdult >= 0) {
    alert('You are too young!');
} else if (isAdult > 10 && isAdult < 18) {
    alert('You are teenager.');
} else {
    console.log('Incorrect data');
};

// task 6
let firstSide = parseFloat(prompt('First size is...'));
let secondSide = parseFloat(prompt('Second size is...'));
let thirdSide = parseFloat(prompt('Third size is...'));


if (!isNaN(firstSide) && !isNaN(secondSide) && !isNaN(thirdSide)) {
    //a. Calculating triangle's area
    const p = (firstSide + secondSide + thirdSide) / 2;
    const triangleArea = (p * (p - firstSide) * (p - secondSide) * (p - thirdSide)) ** .5;
    console.log(triangleArea.toFixed(3));

    //b right triangle true/false
    switch (true) {
        case (firstSide ** 2 + secondSide ** 2 === thirdSide ** 2):
            console.log('This is right triangle');
            break;
        case (secondSide ** 2 + thirdSide ** 2 === firstSide ** 2):
            console.log('This is right triangle');
            break;
        case (thirdSide ** 2 + firstSide ** 2 === secondSide ** 2):
            console.log('This is right triangle');
            break;
        case (firstSide === secondSide && secondSide === thirdSide):
            console.log('This triangle is equilateral');
            break;
        default:
            console.log('Another triangle');
    };
} else {
    console.log('Incorrect data');
};

console.log('-------------------------------------------');

// task 7 first way
const now = new Date().getHours();

if (now >= 23 || now <= 5) {
    console.log('Good night');
} else if (now > 5 && now <= 11) {
    console.log('Good morning');
} else if (now > 11 && now <= 17) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
};

// second way
switch (true) {
    case (now >= 23 || now <= 5):
        console.log('Good night');
        break;
    case (now > 5 && now <= 11):
        console.log('Good morning');
        break;
    case (now > 11 && now <= 17):
        console.log('Good afternoon');
        break;
    default:
        console.log('Good evening');
};









