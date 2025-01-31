import { IDatasControllers } from "../@types/datas.controllers";
import { Response, Request } from "express";
import { IDatasServices } from "../@types/datas.services";

export class DatasControllers implements IDatasControllers {
  constructor(private datasServices: IDatasServices) {}
  public execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.datasServices.searchDatasDataBase();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: (error as Error).message });
    }
  };
}
