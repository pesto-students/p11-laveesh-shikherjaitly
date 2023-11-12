const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(middlewares.requestLogger);

// Set up routes
app.use('/', routes); // Use the router at the root level

// 404 middleware
app.use(middlewares.handle404);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
