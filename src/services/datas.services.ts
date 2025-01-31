import { IDatasAdapter } from "../@types/datas.adapter";
import { IDatasServices } from "../@types/datas.services";

export class DatasServices implements IDatasServices {
  constructor(private datasAdapter: IDatasAdapter) {}
  public searchDatasDataBase = async (): Promise<any> => {
    try {
      const responseOfDataBase = await this.datasAdapter.searchDatas();
      return responseOfDataBase;
    } catch (error) {
      throw error as Error;
    }
  };
}
