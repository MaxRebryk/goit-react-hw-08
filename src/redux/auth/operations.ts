import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBaseUrl, setAuthToken, clearAuthToken } from "../baseUrl";
import { User } from "./slice";
import { RootState } from "../store";

interface AuthResponse {
  token: string;
}

setBaseUrl();

export const register = createAsyncThunk(
  "auth/register",
  async (newUser: User, thunkApi) => {
    try {
      const response = await axios.post<AuthResponse>("/users/signup", newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (newUser: User, thunkApi) => {
    try {
      const response = await axios.post<AuthResponse>("/users/login", newUser);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthToken();
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const reduxState = thunkApi.getState() as RootState;
      setAuthToken(reduxState.auth.token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, thunkApi) {
      const reduxState = thunkApi.getState() as RootState;
      return reduxState.auth.token != null;
    },
  }
);
