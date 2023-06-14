const express = require("express");
const morgan = require("morgan");
const productsRoutes = require('./routes/product')

const server = express();
server.use(morgan("dev"));
server.use(express.static("public"));
server.use(express.json());
server.use("/", productsRoutes.routes);



server.listen(8080, () => {
  console.log("server started");
});
