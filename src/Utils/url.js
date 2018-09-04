import {config} from '../Config/prod';

const URL = {
    "createDashboard":config.serverUrl+"/createDashboard",
    "dashboardStats":config.serverUrl+"/dashboardStats"
}

export {URL};