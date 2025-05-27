import { Http } from "@klippa/nativescript-http";
// import { error } from "console";
import { ApiError } from "~/types";
const API_BASE = "http://192.168.0.3:3000/api";

export default {
  auth: {
    register: async (userData: {
      firstname: string;
      lastname: string;
      phoneNumber: string;
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

        const responseData = response.content?.toJSON();

        if (response.statusCode >= 400) {
          throw {
            staus: response.statusCode,
            message: responseData?.message || "Registration failed",
            errors: responseData?.errors,
          };
        }

        return {
          data: responseData,
          status: response.statusCode,
        };
      } catch (error: unknown) {
        console.log("API request failed:", error);
        console.error("API request failed:", error);

        if (error instanceof Error) {
          throw {
            status: 500,
            message: error.message,
            errors: {},
          } as ApiError;
        }

        const apiError = error as ApiError;
        throw {
          status: apiError.status || 500,
          message: apiError.message || "Network request failed",
          errors: apiError.errors || {},
        } as ApiError;
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
        const responseData = response.content?.toJSON();

        if (response.statusCode >= 400) {
          throw {
            staus: response.statusCode,
            message:
              responseData?.message ||
              "Login failed Incorrect password or User doesn't exit",
            errors: responseData?.errors,
          };
        }

        return {
          data: responseData,
          status: response.statusCode,
        };
      } catch (error) {
        console.log("API request failed:", error);
        console.error("API request failed:", error);
        if (error instanceof Error) {
          throw {
            status: 500,
            message: error.message,
            errors: {},
          } as ApiError;
        }

        const apiError = error as ApiError;
        throw {
          status: apiError.status || 500,
          message: apiError.message || "Network request failed",
          errors: apiError.errors || {},
        } as ApiError;
      }
    },
  },
};
