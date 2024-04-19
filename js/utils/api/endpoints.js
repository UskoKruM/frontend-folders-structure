//JavaScript
import { getAPI_URL } from "./config.js";

const API_URL = getAPI_URL();

const EP_AUTH = `${API_URL}auth`;
const EP_AUTH_GENERATETOKEN = `${EP_AUTH}/generateToken`;
const EP_AUTH_GETROLES = `${EP_AUTH}/getRoles`;

export { EP_AUTH_GENERATETOKEN, EP_AUTH_GETROLES };
