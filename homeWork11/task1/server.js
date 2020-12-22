const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer((request, response) => {
    response.end(
      `        Current user name: ${os.userInfo().username}
        OS type: ${os.type()}
        System worktime: ${parseFloat((os.uptime() / 60).toFixed(2))} minutes
        Current work directory: ${path.dirname(__dirname)}
        Server file name: ${path.win32.basename(__filename)}`
    );
  })
  .listen(5000);
