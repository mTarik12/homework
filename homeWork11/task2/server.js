const myModule = require("./personalmodule");
const os = require("os");

const http = require("http");

const server = http
  .createServer((request, response) => {
    response.end(`${myModule.sayPeriodOfDay(os.userInfo().username)}`);
  })
  .listen(8080);
