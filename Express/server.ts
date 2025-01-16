import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res,next) => {
  res.send('<h1>Express Working</h1>');
  next();
});


app.use((req, res, next) => {
  console.log('Middleware 3');
  next();
});

app.get('/add', (req, res) => {
  res.send('<h1>Express Working Add</h1>');
});


app.get('/send', (req, res) => {
  res.send('<html><body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Add</button></form></body></html>');
});

app.post('/message', (req, res) => {
  console.log(req.body.name);
  res.send('Message Endpoint Called');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});