//JavaScript
import { API_URL_DEV, API_URL_PROD } from "./../consts.js";

const HOSTNAME = window.location.hostname;
const ENVIRONMENT = HOSTNAME === "localhost" ? "dev" : "prod";

const getAPI_URL = () => {
    return ENVIRONMENT === "dev" ? API_URL_DEV : API_URL_PROD;
};

export { getAPI_URL };
