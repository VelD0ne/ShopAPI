import { DataSource } from "typeorm";
import { resolve } from "path";

const myDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "mypassword" ,
    database: process.env.DB_NAME || "animelist",
    entities: [resolve(__dirname, "./entity/*.ts")],
    migrations: [resolve(__dirname, "./migration/*.ts")],
})

export { myDataSource };