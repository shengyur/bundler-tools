var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/users', function (req, res) {
  res.json({
    id: 1,
    name: 'weizhi'
  })
})

app.listen('3000')