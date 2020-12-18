function sayPeriodOfDay(name) {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 7 && hour <= 11) {
    greeting = `Date of request: ${now}
        Good morning, ${name}`;
  } else if (hour > 11 && hour <= 17) {
    greeting = `Date of request: ${now}
        Good afternoon, ${name}`;
  } else if (hour > 17 && hour < 22) {
    greeting = `Date of request: ${now}
        Good evening, ${name}`;
  } else {
    greeting = `Date of request: ${now}
        Good night, ${name}`;
  }
  return greeting;
}

module.exports = {
  sayPeriodOfDay,
};
