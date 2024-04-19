//JavaScript
import { getToken } from "./../auth/jwt.js";
import { HTTP_CONTENT_JSON, HTTP_METHOD_GET, HTTP_METHOD_POST, HTTP_METHOD_PUT, MESSAGE_ERROR_ALERT, MESSAGE_ERROR, MESSAGE_OK } from "./../consts.js";

const getHttpResponseCodes = () =>
    Object.freeze({
        200: "OK",
        400: "Bad Request",
        401: "Unauthorized",
        404: "Not Found",
        422: "Unprocessable Content",
        500: "Internal Server Error"
    });

const request = async (API_URL, method = HTTP_METHOD_GET, body = {}) => {
    let options = { method: method, mode: "cors" };

    options.headers = {
        Accept: HTTP_CONTENT_JSON,
        "Content-Type": HTTP_CONTENT_JSON,
        Authorization: `Bearer ${getToken()}`
    };

    if ([HTTP_METHOD_POST, HTTP_METHOD_PUT].includes(method)) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(API_URL, options);
        return !response.ok ? { message: getHttpResponseCodes()[response.status], statusCode: response.status, success: false } : await response.json();
    } catch (ex) {
        console.log(document.title, MESSAGE_ERROR_ALERT, MESSAGE_ERROR, MESSAGE_OK);
    }
};

export { request };
