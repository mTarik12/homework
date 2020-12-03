// task1
let newWin = window.open("about:blank", "hello world", "width=200,height=200");

setTimeout(() => {
  newWin.resizeTo(500, 500);
  setTimeout(() => {
    newWin.moveTo(200, 200);
    setTimeout(() => {
      newWin.close();
    }, 2000);
  }, 2000);
}, 2000);
