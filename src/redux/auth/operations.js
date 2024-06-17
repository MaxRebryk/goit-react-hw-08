import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", newUser);
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
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (token, thunkApi) => {
    try {
      const response = await axios.get("/users/logout", {
        authorization: token,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
