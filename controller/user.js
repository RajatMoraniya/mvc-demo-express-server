const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const userArr = data.users;



exports.createUser = (req, res) => {
  const user = req.body;
  userArr.push(user);
  res.status(201).send(user);
};

exports.getAllUsers = (req, res) => {
  res.status(200).json(userArr);
};

exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = userArr.find((u) => u.id === id);
  res.status(200).json(user);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIdx = userArr.findIndex((u) => u.id === id);
  userArr.splice(userIdx, 1, { ...req.body, id: id });
  res.status(200).json({ status: "user is Replace with New Payload" });
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIdx = userArr.findIndex((u) => u.id === id);
  const user = userArr[userIdx];
  userArr.splice(userIdx, 1, { ...user, ...req.body });
  res.status(200).json();
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIdx = userArr.findIndex((u) => u.id === id);
  const DeletedUser = userArr.splice(userIdx, 1);
  res.status(200).json(DeletedUser);
};
