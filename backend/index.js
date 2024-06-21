const connectToMongo = require('./db');
const express = require('express');

var cors = require('cors')

connectToMongo();
const app = express();
const port = 5000
// const port = process.env.PORT || 3000;


app.use(cors())

// Middleware to send request
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// default
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello Login!');
// });

// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello Signup!');
// });

app.listen(port, () => {
  console.log(`MyNotebook Backend listening at http://localhost:${port}`);
});