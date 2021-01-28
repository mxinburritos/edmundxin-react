require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const unsplash = require('unsplash-js');
const fetch = require('node-fetch');

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


// app.use(cors);

app.get('/', async (req, res) => {
  console.log('test');
  res.send('resolve');
})

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}


app.get('/getimage', async (req, res) => {
  const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_API_ACCESS_KEY}`);
  const image = await response.json();

  res.send(image);
})

app.listen(port, () => { console.log(`BACK_END_SERVICE_PORT: ${port}`) });