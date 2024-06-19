// Create a web server

// Require express
const express = require('express');
const app = express();
const comments = require('./comments.json');

// Middleware
app.use(express.json());

// Create a post request
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.status(201).send('Comment added');
});

// Create a get request
app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

// Create a delete request
app.delete('/comments/:index', (req, res) => {
  const { index } = req.params;
  if (comments[index]) {
    comments.splice(index, 1);
    res.status(204).send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a put request
app.put('/comments/:index', (req, res) => {
  const { index } = req.params;
  const { username, comment } = req.body;
  if (comments[index]) {
    comments[index] = { username, comment };
    res.status(200).send('Comment updated');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});