import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { appSession, serverPort } from "./config";
import { router } from "./routes/index";
import { myDataSource } from "./db/appDataSource";

const start = async () => {
    await myDataSource.initialize();
    console.log("Data source has been initialized");

    const app = express();

    app.use(express.json());

    app.use(appSession);

    app.use(router);

    app.listen(serverPort, () => {
        console.log(`Server is running at ${serverPort}`);
    });
}

start().catch(console.error);
