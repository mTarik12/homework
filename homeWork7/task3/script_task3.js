makePageBlue = () => (document.documentElement.style.backgroundColor = "blue");

let butnBlue = document
  .querySelector(".blue")
  .addEventListener("click", makePageBlue);

let butnPink = document
  .querySelector(".pink")
  .addEventListener("dblclick", function () {
    document.documentElement.style.backgroundColor = "pink";
  });

let btnHold = document.querySelector(".hold");

btnHold.addEventListener("mousedown", function () {
  document.documentElement.style.backgroundColor = "brown";
});
btnHold.addEventListener("mouseup", function () {
  document.documentElement.style.backgroundColor = "white";
});

let link = document.querySelector(".link");

link.addEventListener("mouseover", function () {
  document.documentElement.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function () {
  document.documentElement.style.backgroundColor = "white";
});
