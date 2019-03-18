const
  express = require('express'),
  fooRouter = express.Router(),
  requireLogin = require('../middleware/requireLogin');

const allFoos = ['foo1', 'foo2', 'foo3'];

fooRouter.get('/', (req, res) => {
  res.json(allFoos);
});

fooRouter.use('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  if (allFoos[id]) {
    req.foo = allFoos[id];
    next();
  } else {
    res.status(500).send(`no foo with id: ${ id }`);
  }
});

fooRouter
  .get('/:id', requireLogin, (req, res) => {
    return res.json(req.foo);
  })
  .put('/:id', requireLogin, (req, res) => {
    const
      { id } = req.params,
      { foo } = req.body;

    if (id && foo)
      allFoos[id] = foo;
  });

module.exports = fooRouter;
