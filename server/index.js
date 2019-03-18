const
  PORT = process.env.PORT || 3000,
  development = process.env.NODE_ENV !== 'production';

const
  express = require('express'),
  next = require('next'),
  nextApp = next(development),
  nextRequestHandler = nextApp.getRequestHandler(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// const db = mongoose.connect(keys.mongoUri);

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/foo', require('./routes/fooRoutes'));
  app.get('*', (req, res) => {
    return nextRequestHandler(req, res);
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`${ development ? 'Development' : 'Production' } server listening on port ${ PORT }`);
  });
});
