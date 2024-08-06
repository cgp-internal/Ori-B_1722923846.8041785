const express = require('express');
const app = express();
const router = require('./routes');
const { db } = require('./models');

app.use(express.json());
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});