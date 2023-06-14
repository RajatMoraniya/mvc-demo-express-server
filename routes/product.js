const express = require("express");
const routes = express.Router();
const productController = require('../controller/product')

routes
  .post("/products", productController.createProduct)
  .get("/products", productController.getAllProducts)
  .get("/products/:id", productController.getProduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

exports.routes = routes;
