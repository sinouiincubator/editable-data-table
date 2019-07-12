/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uuid = require('uuid/v4');

function setup(app) {
  let items = [];

  for (let i = 0; i < 100; i++) {
    items.push({
      id: uuid(),
      title: `标题${i}`,
    });
  }

  app.get('/api/pagination-show-demo', (req, res) => {
    res.json(items);
  });

  app.post('/api/pagination-show-demo', (req, res) => {
    const item = {
      ...req.body,
      id: uuid(),
    };

    items.push(item);

    res.json(item);
  });

  app.put('/api/pagination-show-demo/:id', (req, res) => {
    const { id } = req.params;
    const idx = items.findIndex((item) => item.id === id);

    if (idx === -1) {
      res.status(404).end();
    } else {
      items.splice(idx, 1, req.body);
      res.json(req.body);
    }
  });

  app.delete('/api/pagination-show-demo/:id', (req, res) => {
    const ids = req.params.id.split(',');
    items = items.filter((item) => ids.indexOf(item.id) === -1);
    res.status(204).end();
  });
}

module.exports = setup;
