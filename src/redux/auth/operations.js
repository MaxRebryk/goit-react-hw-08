import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBaseUrl, setAuthToken, clearAuthToken } from "../baseUrl";

setBaseUrl();

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (newUser, thunkApi) => {
    try {
      const response = await axios.post("/users/login", newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthToken();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const reduxState = thunkApi.getState();
      setAuthToken(reduxState.auth.token);
      const response = await axios.get("/users/current");

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, thunkApi) {
      const reduxState = thunkApi.getState();
      return reduxState.auth.token != null;
    },
  }
);
