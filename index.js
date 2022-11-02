var express = require('express');
var app = express();

// to connect css file
var path = require('path');
app.use(express.static(path.join(__dirname, 'styles')));

// to display images
app.use(express.static('public')); 
app.use('/images', express.static('images'));

// app.get('/', function (req, res) {
//   res.send('/index.html');
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000)