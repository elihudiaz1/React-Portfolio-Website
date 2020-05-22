const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const port = process.env.PORT || 5000;


console.log(process.env);

sendGrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());



app.use((req, res, next) => {
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authentication');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
// Pass to next layer of middleware
next();
})



app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


app.post('/express_backend/email', (req, res) => {
 const msg = {
  to: 'diazelihu27@gmail.com',
  from: 'diazelihu27@gmail.com',
  subject: req.body.subject,
  text: req.body.message,
 }

 sendGrid.send(msg)
 .then(result => {
  res.status(200).json({
   success: true
  });
 })
 .catch(err => {
  res.status(401).json({
   success: false
  });
  console.log(err);
 })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
