// BUILD YOUR SERVER HERE
const express = require('express');
const model = require('./users/model');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  console.log('received get request');
  res.json("hello world!");
});

server.post('/api/users', (req, res) => {
  let { body } = req;

  if(!body.name || !body.bio) {
    res.status(400).json({ message: "Please provide name and bio for the user" });
  } else {
    model.insert(body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(500).json({ message: 'could not create user' });
    });
  }
});







module.exports = server; // EXPORT YOUR SERVER instead of {}
