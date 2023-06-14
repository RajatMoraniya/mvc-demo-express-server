const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const productArr = data.products;



exports.createProduct = (req, res) => {
  const product = req.body;
  productArr.push(product);
  res.status(201).send(product);
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(productArr);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = productArr.find((p) => p.id === id);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIdx = productArr.findIndex((p) => p.id === id);
  productArr.splice(productIdx, 1, { ...req.body, id: id });
  res.status(200).json({ status: "Product is Replace with New Payload" });
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIdx = productArr.findIndex((p) => p.id === id);
  const product = productArr[productIdx];
  productArr.splice(productIdx, 1, { ...product, ...req.body });
  res.status(200).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIdx = productArr.findIndex((p) => p.id === id);
  const DeletedProduct = productArr.splice(productIdx, 1);
  res.status(200).json(DeletedProduct);
};
