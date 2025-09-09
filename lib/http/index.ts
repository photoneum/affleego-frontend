import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";

import { auth } from "@/auth";
import { env } from "@/env";
import { isServer } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { tokenRefresh } from "../actions/tokenRefresh";

// Define the possible formats for error detail
type ErrorDetailField = string[];
type ErrorDetailObject = Record<string, ErrorDetailField>;

// Extend Axios config to include retry flag
// Extend Axios config to include retry count
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retryCount?: number;
}

// Updated API error type structure
type APIError = {
  state: string;
  message: string;
  data?: {
    detail: string | ErrorDetailObject;
  };
};

// Enhanced function to handle Axios errors
const handleAxiosError = (error: AxiosError<APIError>) => {
  // API returned an error response
  if (error.response) {
    const { status } = error.response;
    const errorData = error.response.data;
    const message = errorData?.message;

    // Parse error details if available
    if (errorData?.data?.detail) {
      const { detail } = errorData.data;

      // Case 1: detail is a string
      if (typeof detail === "string") {
        return detail;
      }

      // Case 2: detail is an object with field arrays
      if (typeof detail === "object") {
        // Get all error messages
        const errorMessages: string[] = [];

        for (const [field, errors] of Object.entries(detail)) {
          if (errors.length > 0) {
            // Format: "Field: Error message"
            const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
            errorMessages.push(`${fieldName}: ${errors[0]}`);
          }
        }

        // Join all errors with line breaks for readability
        if (errorMessages.length > 0) {
          return errorMessages.join("\n");
        }
      }
    }

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

    return message || "Unknown API error";
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
      let session: Session | null = null;

      if (isServer) {
        session = await auth();
      } else {
        session = await getSession();
      }

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
    async (error: AxiosError<APIError>) => {
      // Only handle 401 errors from API (not network errors)
      const originalRequest = error.config as CustomAxiosRequestConfig;
      if (
        error.response?.status === 401 &&
        originalRequest &&
        typeof window !== "undefined"
      ) {
        // Initialize retry count if not set
        if (!originalRequest._retryCount) {
          originalRequest._retryCount = 0;
        }

        // Check if we haven't exceeded max retries (2 attempts)
        if (originalRequest._retryCount < 2) {
          originalRequest._retryCount++;

          // Get session to access refresh token
          const session = await getSession();
          const refreshToken = session?.refresh;

          if (refreshToken) {
            const data = await tokenRefresh(refreshToken);
            if (data?.access) {
              // Set new access token in header and retry
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers["Authorization"] =
                `Bearer ${data.access}`;
              return instance(originalRequest);
            }
          }
        }

        // If we've exceeded max retries or refresh fails, log out user
        await signOut({ callbackUrl: "/auth/login" });
        return Promise.reject(
          "Session expired after multiple retry attempts. Please log in again.",
        );
      }
      return Promise.reject(handleAxiosError(error));
    },
  );

  return instance;
};

// Export a single Axios instance that works in both environments
export const http = createAxiosInstance();
