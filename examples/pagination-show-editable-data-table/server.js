/* eslint-disable */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const setup = require('./pagination-show-demo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setup(app);

app.listen(5000, error => {
  if (error) {
    console.error("启动服务器失败", error);
  } else {
    console.log("启动服务器成功");
  }
});
