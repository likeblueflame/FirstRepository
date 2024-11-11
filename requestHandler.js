const mariadb = require("./database/connect/mariadb");

function main(response) {
  console.log("main");

  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("HEE's Main page");
  response.end();
}
function login(response) {
  console.log("login");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("HEE's Login page");
  response.end();
}

function favicon() {
  console.log("favicon");
}

let handle = {}; //key : value
handle["/"] = main;
handle["/login"] = login;
handle["/favicon.ico"] = favicon;

exports.handle = handle;
