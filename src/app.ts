import express from "express";
const app = express();
const port: number = 8000;

app.get("/api/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({
    name: "eom sun seong",
    age: 45,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
