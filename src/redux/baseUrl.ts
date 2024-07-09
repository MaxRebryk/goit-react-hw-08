import axios from "axios";

export const setBaseUrl = (): void => {
  axios.defaults.baseURL = "https://connections-api.goit.global";
};

export const setAuthToken = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = (): void => {
  axios.defaults.headers.common.Authorization = "";
};
