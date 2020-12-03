const arrCities = [
  "New-York",
  "Boston",
  "Chikago",
  "Berlin",
  "Kyiv",
  "Lviv",
  "Kharkiv",
  "Keln",
  "Gamburg",
];

const country = document.getElementById("country");
const option1 = country.firstElementChild;
const option2 = country.firstElementChild.nextElementSibling;
const option3 = country.lastElementChild;
const arr = [option1, option2, option3];

let newOption1 = new Option(arrCities[3], arrCities[3]);
let newOption2 = new Option(arrCities[0], arrCities[0]);
let newOption3 = new Option(arrCities[4], arrCities[4]);
let newOption4 = new Option(arrCities[1], arrCities[1]);
let newOption5 = new Option(arrCities[2], arrCities[2]);
let newOption6 = new Option(arrCities[5], arrCities[5]);
let newOption7 = new Option(arrCities[6], arrCities[6]);
let newOption8 = new Option(arrCities[8], arrCities[8]);
let newOption9 = new Option(arrCities[7], arrCities[7]);

changeCity = () => {
  if (option1.selected) {
    cities.append(newOption1);
    cities.append(newOption8);
    cities.append(newOption9);
  } else if (option2.selected) {
    cities.append(newOption2);
    cities.append(newOption4);
    cities.append(newOption5);
  } else if (option3.selected) {
    cities.append(newOption3);
    cities.append(newOption6);
    cities.append(newOption7);
  }
};

let cities = document.getElementById("cities");

document.querySelector("#country").addEventListener("change", function () {
  for (let i = cities.options.length - 1; i >= 0; i--) {
    cities.remove(i);
  }
  changeCity();
});

document.querySelector("#cities").addEventListener("change", function () {
  for (let i = country.options.length - 1; i >= 0; i--) {
    for (let j = cities.options.length - 1; j >= 0; j--) {
      if (
        country.options[i].selected === true &&
        cities.options[j].selected === true
      ) {
        let p = document.body.lastElementChild.previousElementSibling;
        p.textContent = country.options[i].text + ", " + cities.options[j].text;
      }
    }
  }
});
