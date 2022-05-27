const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors");
//const path = require("path");
//const express = require("express");
const router = jsonServer.router("./data/db.json");
console.log(router);
// const middlewares = jsonServer.defaults();
const middlewares = jsonServer.defaults({
  static: "./build",
});

const port = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/blogs/*": "/$1",
  })
);

server.use(router);
// server.use(express.static(path.join(__dirname, "build", "index.html")));
server.use(cors());
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
