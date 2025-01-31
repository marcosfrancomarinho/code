import { Pool } from "pg";

const databaseConnection = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
// export { databaseConnection };
(async()=>{
await databaseConnection.query(
    `CREATE TABLE IF NOT EXISTS datas_db (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL, 
    email VARCHAR NOT NULL,
    data_hours TIMESTAMP
)`)
})()


