import request from "./request";

const serviceLogIn = `/api/v1/auth`;

export const loginAut = async (params: any) => {
  return request(serviceLogIn, { method: "Post", data: params });
};
