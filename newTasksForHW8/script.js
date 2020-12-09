// task3

const regexp = /d(b+)(d)/i;
let str = "cdbBdbsbz";
let result = regexp.exec(str);
console.log(result);

console.log("---------------------------------------------------");
/************************************************************** */

// task7

checkLogin = (login) => {
  const regExp = /[^_\d](\w\.?){2,8}/i;

  let test = login.match(regExp);

  if (test[0].length === login.length) {
    console.log(true);
    let result = regExp.exec(login);

    let regExp2 = /\d+\.?(\d+)/g;
    console.log(result[0].match(regExp2));
  } else {
    console.log("Please enter valdi login");
  }
};

checkLogin("ee1.1re3.3");
