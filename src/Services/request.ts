import axios from "axios";
import { request } from "http";

let instance = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY,
  validateStatus: function (status) {
    return status < 500;
  },
});

let endPoint = null;
// let isEnabled: boolean = false;

// const isHandlerEnabled = (config: any) => {
//   return objectHasProperty(config, "notInterceptor") ? true : false;
// };

const requestHandler = (request: any) => {
  //   isEnabled = isHandlerEnabled(request);
  try {
    let token = localStorage.getItem("tkn");
    if (token && token !== "" && !request.notBearer) {
      request.headers.common["Authorization"] = `Bearer ${token}`;
    }
  } catch (_error) {
    delete request.headers.common["Authorization"];
  }

  return request;
};

//request interceptor
instance.interceptors.request.use((request) => {
  endPoint = request.url;
  return requestHandler(request);
});

//response interceptor
instance.interceptors.response.use((response) => {
  const { status } = response;

  if (typeof response !== "undefined") {
    const messageErr = response.data.message;

    switch (status) {
      case 200:
        if (response.data.notInterceptor) {
          return response;
        }
        break;

      case 400:
        alert(messageErr);
        break;

      default:
        break;
    }
  }

  return response;
});
export default instance;
