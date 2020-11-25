// task1
const person = {
  name: "Taras",
  lastName: "Maiula",
  age: 25,
  isMarried: true,
};

const propsCount = (currentObject) =>
  console.log(Object.keys(currentObject).length);

propsCount(person);

console.log("---------------------------------------------------");

/*****************************************************************/

// task2
const newPerson = {
  name: "Mark",
  lastName: "Pirs",
  age: 24,
  isMarried: false,
  dateOfBirth: 1996,
};

const showProps = (obj) => {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
};

showProps(newPerson);

console.log("---------------------------------------------------");

/*****************************************************************/

// task3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    console.log(this.name + " " + this.surname + " " + midleName);
  }
  showCourse() {
    const curCourse = new Date().getFullYear() - this.year;
    console.log(`Current course: ${curCourse}`);
  }
}

const testPerson = new Person("Taras", "Maiula");
testPerson.showFullName();

const student = new Student("Anton", "Antonenko", 2014);
student.showFullName("Antonovych");
student.showCourse();

console.log("---------------------------------------------------");

/*****************************************************************/

// task4
class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  get expirience() {
    return this.#experience;
  }
  set expirience(value) {
    this.#experience = value;
  }
  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary is ${salary}.`);
  }
  showSalaryWithExperience() {
    const salaryWithExp = this.dayRate * this.workingDays * this.expirience;
    console.log(`${this.fullName} salary is ${salaryWithExp}.`);
  }
  showSalaryforArray() {
    const salaryForArray = this.dayRate * this.workingDays * this.expirience;
    return salaryForArray;
  }
}

const worker1 = new Worker("Mark Smith", 40, 22);

console.log(worker1.fullName);
worker1.showSalary();
console.log(`New expirience: ${worker1.expirience}`);
worker1.showSalaryWithExperience();
worker1.expirience = 1.5;
console.log(`New expirience: ${worker1.expirience}`);
worker1.showSalaryWithExperience();

// додаю нови працівників
const worker2 = new Worker("John Johnson", 32, 22);

const worker3 = new Worker("Jane Petersen", 95, 22);

// виводжу їх властивості
console.log(" "); // використовую для зручності перегляду консоля в браузері

console.log(worker2.fullName);
worker2.showSalary();
console.log(`New expirience: ${worker2.expirience}`);
worker2.showSalaryWithExperience();
worker2.expirience = 1.5;
console.log(`New expirience: ${worker2.expirience}`);
worker2.showSalaryWithExperience();

console.log(" ");

console.log(worker3.fullName);
worker3.showSalary();
console.log(`New expirience: ${worker3.expirience}`);
worker3.showSalaryWithExperience();
worker3.expirience = 1.5;
console.log(`New expirience: ${worker3.expirience}`);
worker3.showSalaryWithExperience();

console.log(" ");

// для сортування по збільшенню зарплати створю. окремі об'єкти та поміщаю їх в масив
let mark = { fullName: worker1.fullName, salary: worker1.showSalaryforArray() };
let john = { fullName: worker2.fullName, salary: worker2.showSalaryforArray() };
let jane = { fullName: worker3.fullName, salary: worker3.showSalaryforArray() };

let allWorkers = [mark, john, jane];

function sortBySalary(arr) {
  arr.sort((a, b) => a.salary > b.salary ? 1 : -1);
}
sortBySalary(allWorkers);

console.log(`Sorted salary:
${allWorkers[0].fullName}: ${allWorkers[0].salary}
${allWorkers[1].fullName}: ${allWorkers[1].salary}
${allWorkers[2].fullName}: ${allWorkers[2].salary}`);

console.log("---------------------------------------------------");

/*****************************************************************/

// task5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }
  getArea() {
    return (this.a * this.h) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    return this.a * this.a;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    const p = 3.14159265;
    return parseFloat((this.r * this.r * p).toFixed(3));
  }
}

const figures = [new Triangle(4, 5), new Square(10), new Circle(7)];

function handleFigures(figures) {

  console.log(`  ${GeometricFigure.name}: ${figures[0].toString()} - area: ${figures[0].getArea()}
  ${GeometricFigure.name}: ${figures[1].toString()} - area: ${figures[1].getArea()}
  ${GeometricFigure.name}: ${figures[2].toString()} - area: ${figures[2].getArea()}`);


  /*щоб отримати тотал площі фігур - загнав всі пораховані площі
  в окремий масив та застосував метод reduce*/

  let squaresArr = [];

  for (let i = 0; i < figures.length; i++) {
    squaresArr.push(figures[i].getArea());
  }

  const total = squaresArr.reduce((prev, cur) => prev + cur, 0);
  console.log(`  ${total} // total area`);
}
handleFigures(figures);
