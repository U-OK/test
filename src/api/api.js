import HTTP from "./config";

const { timeout } = HTTP;

export default {
  POST(path, data) {
    return HTTP.post(path, data, { timeout });
  },
  PUT(path, data) {
    return HTTP.put(path, data, { timeout });
  },
  DELETE(path, data) {
    return HTTP.delete(path, data, { timeout });
  },
  GET(path, params) {
    return HTTP.get(path, params, { timeout });
  },
};
