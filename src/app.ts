import express from "express";
import { datasRouter } from "./routers/datas.routers";
const port: number = Number(process.env.PORT ?? "8080");
const app = express();
app.use(express.json());
app.use(datasRouter);
app.listen(port, () => console.log(`server online on port http://localhost:${port}`));
