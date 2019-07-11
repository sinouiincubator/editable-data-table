/* eslint-disable */
const express = require('express');
const app = express();
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
  res.json({
    hello: 'world',
  });
});

app.get('/api/tests', (req, res) => {
  res.json([
    { id: '1', title: '123', note: '备注1' },
    { id: '2', title: '1234', note: '备注2' },
  ]);
});

app.delete('/api/tests/:id', (req, res) => {
  res.status(204).end();
});

app.post('/api/tests', (req, res) => {
  const item = req.body;
  res.json({ ...item, id: uuid() });
});

app.put('/api/tests/:id', (req, res) => {
  const item = req.body;

  res.json(item);
});

app.listen(5000, (error) => {
  if (error) {
    console.error('启动服务器失败', error);
  } else {
    console.log('启动服务器成功');
  }
});
