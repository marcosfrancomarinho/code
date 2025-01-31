import { IDatasAdapter } from "../@types/datas.adapter";

export class DatasAdapter implements IDatasAdapter {
  public searchDatas = async (): Promise<any> => {
    try {
      const responseOfSearchApi = await fetch(
        "https://clube-series-api.onrender.com"
      );
      if (!responseOfSearchApi.ok) throw new Error("Faield Search");
      const jsonOfResponse = await responseOfSearchApi.json();
      return jsonOfResponse;
    } catch (error) {
      throw error as Error;
    }
  };
}
