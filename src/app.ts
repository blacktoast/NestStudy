import { Cat, CatType } from "./app.model";
import express from "express";
const app = express();
const port: number = 8000;
const data = [1, 2, 3, 4];

function errorChecking(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.send({ error: "에러발생" });
}

let myLogger = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log(req.rawHeaders[1]);
  next();
};

app.use(myLogger);
app.get("/", (req, res) => {
  res.send({ cats: Cat });
});
app.get("/cats/blue", (req, res) => {
  res.send({ blue: Cat[0] });
});
app.get("/cats/cute", (req, res) => {});

app.use(errorChecking);

app.listen(port, () => {
  console.log("server is on");
});
