import { Request } from "../../common/configs/Request";

export const UserServices = {
  login: async (email: string, password: string) => {
    const res = await Request.post("/userservice/auth", { email, password });
    return res.data;
  },

  checktoken: async (token: string | null | undefined) => {
    const response = await Request.post("/userservice/auth/checktoken", {
      token,
    });
    return response.data;
  },

  findUserByToken: async (token: string | null | undefined) => {
    const response = await Request.get(`/userservice/findbytoken/${token}`);
    return response.data;
  },
};
