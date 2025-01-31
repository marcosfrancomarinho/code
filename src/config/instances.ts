import { DatasControllers } from "../controllers/data.controllers";
import { DatasAdapter } from "../integrations/datas.adapter";
import { DatasServices } from "../services/datas.services";

const datasAdapter = new DatasAdapter();
const datasServices = new DatasServices(datasAdapter);
const datasControllers = new DatasControllers(datasServices);

export { datasControllers, datasServices };
