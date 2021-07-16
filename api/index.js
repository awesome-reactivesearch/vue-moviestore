const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
 
// parse application/json
app.use(express.json())

const stripecheckout = require('./stripe-checkout');

app.use(stripecheckout);

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app;
