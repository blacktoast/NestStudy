import { Cat, CatType } from "./app.model";
import express from "express";
const app = express();
const port: number = 8000;
const data = [1, 2, 3, 4];

let myLogger = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("LOGGED");
  next();
};
let myLogger2 = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("LOGGED2");
  next();
};
app.use(myLogger);
app.get("/", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.use(myLogger2);

app.post("/", (req, res) => {
  res.send("jel");
});
app.listen(port, () => {
  console.log("server is on");
});
