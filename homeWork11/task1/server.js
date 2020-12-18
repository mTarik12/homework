const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer((request, response) => {
    response.end(
      `        Current user name: ${os.userInfo().username}
        OS type: ${os.type()}
        System worktime: ${os.uptime()}
        Current work directory: ${path.dirname(
          "D:/JS/JS_SoftServe_course/11 lesson/homeWork11/task1/server.js"
        )}
        Server file name: ${path.win32.basename(
          "D:/JS/JS_SoftServe_course/11 lesson/homeWork11/task1/server.js"
        )}`
    );
  })
  .listen(5000);

console.log("run server");
