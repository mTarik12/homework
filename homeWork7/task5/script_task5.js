let button = document.querySelector(".btn");

button.addEventListener("mousedown", function () {
  const paragraph = document.createElement("p");
  document.body.append(paragraph);
  paragraph.textContent = "I was pressed!";
});
button.addEventListener("mouseover", function () {
  const paragraph = document.createElement("p");
  document.body.append(paragraph);
  paragraph.textContent = "Mouse on me!";
});
button.addEventListener("mouseout", function () {
  const paragraph = document.createElement("p");
  document.body.append(paragraph);
  paragraph.textContent = "Mouse is not on me!";
});
