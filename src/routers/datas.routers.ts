import { Router } from "express";
import { datasControllers } from "../config/instances";

const datasRouter = Router();
datasRouter.get("/", datasControllers.execute);

export { datasRouter };
