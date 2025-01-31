import { Request, Response } from "express";

export interface IDatasControllers {
  execute(req: Request, res: Response): Promise<void>;
}
