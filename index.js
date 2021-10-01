const mysql = require("mysql");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("/aaa", (req, res) => {
  res.status(200);
  res.json({ message: "test" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`sever listen on ${process.env.PORT || 3001}`);
});

// const sql = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Strong_2540",
// });

// sql.connect((err) => {
//   if (err) console.log("==========", err);
//   console.log("connected");
// });
