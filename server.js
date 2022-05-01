const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults({
  static: "./build",
});

const port = process.env.PORT || 8000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    "/blog/*": "/$1",
  })
);

server.use(router);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
