import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})

export { myDataSource };