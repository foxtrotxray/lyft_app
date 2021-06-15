const express = require('express')
const app = express()

app.post('/test', (req, res) => {
  let output = {return_string: "Hello World!"}
  res.send(output)
})

exports.server = app;