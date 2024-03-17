// controller

"use strict";

const users = {
  id: ["정기성", "나개발", "김팀장"],
  pw: ["1234", "12345", "123456"],
};

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        return res.json();
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};
// key 값만 넣으면 value도 동일하게 된다
// key : key

module.exports = {
  output,
  process,
};
