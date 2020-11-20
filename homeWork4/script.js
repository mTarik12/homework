// task1
function testThrow(exception) {
    throw new Error(`Caught: ${exception}`);
}

try {
    testThrow(new Error('An error happened'));
} catch (exception) {
    console.log(exception.message);
    //console.log(exception.name);
    //console.log(exception.stack);
}

console.log('-------------------------------------------')

/**********************************************************************************************/

// task2
const calcRectangleArea = (width, height) => {
    width = prompt('Rectangle width is...', 5);
    height = prompt('Rectangle height is...', 3);

    if (width > 0 && height > 0) {
        return width * height;
    } else {
        throw new Error('Wrong data. Please try again.');
    }
}

try {
    const result = calcRectangleArea();
    console.log(result);
} catch (error) {
    console.log(error.message);
}

console.log('-------------------------------------------')

/**********************************************************************************************/

// task3
const chekAge = (age) => {
    age = prompt('How old are you?');

    if (age === '' || age === ' ') {
        throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(age)) {
        throw new Error('This is NOT a numeric value. Please try again.');
    } else if (age < 14) {
        throw new Error('Sorry. You are too young. Please wait untill 14.');
    } else {
        return age;
    }
}

try {
    const result = chekAge();
    alert('Have a nice time during watching this film!')
} catch (error) {
    alert(error);
}

/**********************************************************************************************/

// task4
class MonthException {
    constructor(message = 'Incorrect month number', name = 'MonthException') {
        this.message = message;
        this.name = name;
    }
    showMonthName(month) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if (month > 12 || month < 0 || isNaN(month)) {
            throw new Error(`${this.name}: ${this.message}`);
        } else {
            return months[month - 1];
        }
    }
}

try {
    const whatMonth = new MonthException();
    console.log(whatMonth.showMonthName(14));
} catch (exception) {
    console.log(exception.message);
}

console.log('-------------------------------------------')

/**********************************************************************************************/

//task5
const showUser = (id) => {
    const obj = new Object();

    if (id < 0 || isNaN(id)) {
        let myError = new Error(`Error: ID must not be negative: ${id}.`);
        console.log(myError.message);
    } else {
        obj.id = id;
        return obj;
    }
}


const showUsers = (ids) => {
    const arr = [];
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] > 0 || !isNaN(ids[i])) {
            arr.push(showUser(ids[i]));
        }
    }
    const filtered = arr.filter(cur => {
        return cur != undefined;
    });
    return filtered;
}

try {
    let result = showUsers([-7, 12, -5, 8]);
    console.log(result);
} catch (error) {
    console.log(error.message);
};














