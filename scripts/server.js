/* eslint-disable */
const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.json({
    hello: 'world',
  });
});

app.listen(5000, (error) => {
  if (error) {
    console.error('启动服务器失败', error);
  } else {
    console.log('启动服务器成功');
  }
});
