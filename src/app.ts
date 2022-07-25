import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import indexRouter from "./routes/test";
import productRouter from "./routes/product";

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/', indexRouter);
app.use('/api', productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

