import { Http } from "@klippa/nativescript-http";

const API_BASE = "http://192.168.0.4:3000/api";

export default {
  auth: {
    register: async (userData: {
      firstname: string;
      email: string;
      password: string;
    }) => {
      try {
        const response = await Http.request({
          method: "POST",
          url: `${API_BASE}/user/register`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          content: JSON.stringify(userData),
        });
        return {
          data: response.content?.toJSON(),
          status: response.statusCode,
        };
      } catch (error) {
        console.log("API request failed:", error);
        console.error("API request failed:", error);
        throw error;
      }
    },

    login: async (userData: { email: string; password: string }) => {
      try {
        const response = await Http.request({
          method: "POST",
          url: `${API_BASE}/user/login`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          content: JSON.stringify(userData),
        });
        return {
          data: response.content?.toJSON(),
          status: response.statusCode,
        };
      } catch (error) {
        console.log("API request failed:", error);
        console.error("API request failed:", error);
        throw error;
      }
    },
  },
};
