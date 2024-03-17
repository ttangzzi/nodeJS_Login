"use strict";

// app.js가 아닌 www.js로 서버열기

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
