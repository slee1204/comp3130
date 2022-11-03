const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db");

// make tables
db.run(
  `CREATE TABLE IF NOT EXISTS UserInfo (
        id int auto_increment,
        FirstName varchar(25),
        DOB DATE,
        PRIMARY KEY (id)
      )`
);
db.run(
  `CREATE TABLE IF NOT EXISTS ZodiacSigns (
        id int auto_increment,
        DateStart DATE, 
        DateEnd DATE,
        SignName varchar(25),
        ImgSrc varchar(1000),
        Description varchar(1000),
        PRIMARY KEY (id)
    )`
);

db.run(
  `INSERT INTO ZodiacSigns (SignName, DateStart, DateEnd)
  VALUES ("Aries", "March 21st", "April 19th"),("Taurus", "April 20th", "May 20th"),("Gemini", "May 21st", "June 21st"),("Cancer", "June 22nd", "July 22nd"),("Leo", "July 23rd", "August 22nd"),("Virgo", "August 23rd", "September 22nd"),("Libra", "September 23rd", "October 23rd"),("Scorpio", "October 24th", "November 21st"),("Sagittarius", "November 22nd", "December 21st"),("Capricorn", "December 22nd", "January 19th"),("Aquarius", "January 20th", "February 18th"),("Pisces", "February 19th", "March 20th")`
);

module.exports = db;
