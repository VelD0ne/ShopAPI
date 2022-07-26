import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";
import indexRouter from "./routes/test";
import productRouter from "./routes/product";
import cartRouter from "./routes/cart";

declare module 'express-session' {
  export interface SessionData {
    cart: [];
  }
}

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(session({secret: "Shh, its a secret!",
resave: false,
saveUninitialized: true}));

app.use('/', indexRouter);
app.use('/api', productRouter);
app.use('/', cartRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

