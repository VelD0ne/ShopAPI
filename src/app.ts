import dotenv from "dotenv";
dotenv.config(); //Reads .env file and makes it accessible via process.env

import express, { NextFunction, Request, Response } from "express";
import session from "../types";
import { router } from "./routes/index";
import { myDataSource } from "./db/appDataSource";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization:", err);
    process.exit();
  });

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

