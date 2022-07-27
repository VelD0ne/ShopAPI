import dotenv from "dotenv";
dotenv.config(); //Reads .env file and makes it accessible via process.env

import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import { router } from "./routes/index";

declare module 'express-session' {
  export interface SessionData {
    cart: [];
  }
}

const app = express();

app.use(express.json());

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true
}));

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

