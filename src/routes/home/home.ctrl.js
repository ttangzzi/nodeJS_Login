// controller

"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// key 값만 넣으면 value도 동일하게 된다
// key : key

module.exports = {
  hello,
  login,
};
