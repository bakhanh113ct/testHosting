import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "10mb" }));

// route(app);

app.use("/get", (req, res, next) => {
  return res.json({ a: "a" });
}); 

app.listen(8080);
