var express = require("express");
var db = require("./create-tables");
var app = express();

// to connect css & js files
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// to display images
app.use(express.static("public"));
app.use("/images", express.static("images"));

// app.get('/', function (req, res) {
//   res.send('/index.html');
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//test
app.get("/test", (req, res) => {
  // this reads all data from ZodiacSigns table
  db.each("SELECT * FROM ZodiacSigns", (err, row) => {
    console.log(row);
  });
  res.end();
});

// app.get("/adduser", (req, res) => {
//   const FirstName = req.query.FirstName;
//   const dob = req.query.DOB;
//   const id = req.query.id;

//   // error message for when name and age are not provided
//   if (!FirstName || !dob) return res.end("please provide name and dob");
//   // adding values in
//   db.run("insert into UserInfo (name,dob) values (?,?,?)", [
//     FirstName,
//     dob,
//     id,
//   ]);

//   console.log(FirstName, dob);
//   res.end();
// });

app.listen(3000);
