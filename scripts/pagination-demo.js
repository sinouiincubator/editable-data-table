/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
function setup(app) {
  let items = [];

  for (let i = 0; i < 500; i++) {
    items.push({
      id: `${i}`,
      title: `王先生${i}`,
      birthday: '2010-12-12',
      sex: '男',
      duty: '处长',
    });
  }

  app.get('/api/pagination-demo', (req, res) => {
    const { page = 0, size = 15 } = req.query;
    const pageNo = parseInt(page, 10);
    const pageSize = parseInt(size, 10);
    res.json({
      totalElements: items.length,
      number: pageNo,
      totalPages: Math.ceil(items.length / size),
      size: pageSize,
      content: items.slice(pageNo * size, (pageNo + 1) * size),
    });
  });

  app.delete('/api/pagination-demo/:id', (req, res) => {
    const { id } = req.params;
    const selectedIds = id.split(',');
    items = items.filter(
      (item) => selectedIds.findIndex((id) => id === item.id) === -1,
    );
    res.sendStatus(204).end();
  });

  app.put('/api/pagination-demo/:id', (req, res) => {
    const user = req.body;

    const idx = items.findIndex((item) => item.id === user.id);
    items = [...items.slice(0, idx), user, ...items.slice(idx + 1)];
    res.json(user);
  });
}

module.exports = setup;
