const express = require('express');
const app = express();
const port = 3000;

const users = [
  { name: 'Matti', age: 55, email: 'matti@example.com' },
  { name: 'Topi', age: 23, email: 'topi@example.com' },
  { name: 'Maija', age: 35, email: 'maija@example.com' },
];

// ejs templating engine
app.set('view engine', 'ejs');

// route
app.get('/', (req, res) => {
  const message = 'Welcome to my EJS page!';
  const items = ['Apples', 'Bananas', 'Tomatoes', 'Blueberries'];
  const isTrue = true;

  res.render('index', { message, items, isTrue, users });
});



// server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
