import express, { Request, Response } from "express";

const mysql = require("mysql");

const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./simple-react/build")));

app.get("/aaa", (req: Request, res: Response) => {
  res.status(200);
  res.json({ message: "test" });
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "./simple-react/build/index.html"));
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
