import axios from "axios";

export const setBaseUrl = () => {
  axios.defaults.baseURL = "https://connections-api.goit.global";
};

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};
