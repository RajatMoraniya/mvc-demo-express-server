const express = require("express");
const morgan = require("morgan");
const productsRoutes = require('./routes/product')
const usersRoutes = require('./routes/user')

const server = express();
server.use(morgan("dev"));
server.use(express.static("public"));
server.use(express.json());
server.use("/api/v1/products", productsRoutes.routes);
server.use("/api/v1/users", usersRoutes.routes);



server.listen(8080, () => {
  console.log("server started");
});
