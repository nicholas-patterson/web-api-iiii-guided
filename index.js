require("dotenv").config();
const server = require("./api/server.js");
const defaults = require("./config/defaults");

//const port = 4000;
server.listen(defaults.port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${defaults.port} ***\n`
  );
});
