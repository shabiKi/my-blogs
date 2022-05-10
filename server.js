const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors");
const path = require("path");
const express = require("express");
const router = jsonServer.router("../data/db.json");
const middlewares = jsonServer.defaults();
// const middlewares = jsonServer.defaults({
//   static: "./build",
// });

const port = process.env.PORT || 3000;
server.use("/db", middlewares, router);
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );

// server.use(router);
server.use(express.static(path.join(__dirname, "build")));
server.use(cors());
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
