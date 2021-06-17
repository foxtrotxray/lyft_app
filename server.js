const express = require('express')
const app = express()
const split = require('./splitting_function')

app.use(express.json())

app.post('/test', (req, res) => {
  let output;
  if(req.body && req.body.hasOwnProperty('string_to_cut')) {
    output = {return_string: split.pull_third_characters(req.body.string_to_cut)}
    res.send(output);
  }
  else {
    res.status(400).send({error: "Could not process a string to cut"})
  }
})

exports.server = app;