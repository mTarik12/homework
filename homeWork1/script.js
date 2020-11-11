// task1 is in index.html file due to conditions of the first task

// task2
console.log('My last name is Maiula');

// task3
let x = 25;
let y = 'second variable';
document.write(x + ' and ' + y + '. ');

y = x;
document.write(`And now ${x} = x and ${y} = y. They are equal`)

//task4
const object = {
    string: 'Taras',
    number: 25,
    boolean: true,
    null: null,
    undefined: undefined
}

// task5
const isAdult = confirm('Are you already adult?');
console.log(isAdult);

// task6
let firstName;
let lastName;
let studyGroup;
let yearOfBirth;

firstName = 'Taras';
lastName = 'Maiula';
studyGroup = 'LV-548';
yearOfBirth = 1995;

const isMarried = true;

console.log(typeof yearOfBirth);
console.log(typeof isMarried);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof studyGroup);

let element = document.getElementById('not-exists');
let undVariable;

console.log(typeof element);
console.log(typeof undVariable);

//task7
const login = prompt('Write your login here, please.', 'User');
const email = prompt('Write your email here, please.', 'usermale@gmail.com');
const password = prompt('And your password, please.', 'qwerty - please choose something better');  

alert(`Dear ${login}, your email adress: ${email}; your password is: ${password}. Please press 'ok' to confirm. Thank you for your registration!`);

// task8
const seconds = { //value - minutes
    hour: 60,
    dayAndNight: 1440,
    month: 43200
};

function calculateSeconds (sec) {
    const inHour = sec * seconds.hour;
    const inDayAndNight = sec * seconds.dayAndNight;
    const inMonth = sec * seconds.month;
    document.querySelector('.main-title').textContent = `${inHour} seconds in an hour, ${inDayAndNight} seconds in day and night together and ${inMonth} seconds in a month.`;
}
calculateSeconds(60);






















