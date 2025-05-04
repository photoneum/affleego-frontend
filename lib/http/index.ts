import { auth } from "@/auth";
import { env } from "@/env";
import axios from "axios";
import type { AxiosError } from "axios";

type APIError = {
  status: boolean;
  message: string;
};

// Enhanced function to handle Axios errors
const handleAxiosError = (error: AxiosError<APIError>) => {
  // API returned an error response
  if (error.response) {
    const { status } = error.response;
    const message = error.response.data?.message;

    // Handle specific status codes
    if (status === 401) {
      return message || "Authentication failed. Please log in again.";
    } else if (status === 403) {
      return message || "You do not have permission to perform this action.";
    } else if (status === 404) {
      return message || "The requested resource was not found.";
    } else if (status >= 500) {
      return message || "Server error. Please try again later.";
    }

    return "Unknown API error";
  }

  // Request was made but no response received (network error)
  if (error.request) {
    if (!navigator?.onLine) {
      return "You appear to be offline. Please check your internet connection.";
    }
    return "No response received from server. Please try again later.";
  }

  // Error in setting up the request
  return `Request error: ${error.message || "Unknown error"}`;
};

// Create Axios instance with the environment-appropriate session getter
const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    async (config) => {
      const session = await auth();
      if (session) {
        const token = session?.access;
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError<APIError>) => Promise.reject(handleAxiosError(error)),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<APIError>) => Promise.reject(handleAxiosError(error)),
  );

  return instance;
};

// Export a single Axios instance that works in both environments
export const http = createAxiosInstance();
