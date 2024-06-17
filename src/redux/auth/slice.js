import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};

const handlerejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handlerejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handlerejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.user.name = null;
        state.user.name = null;
        state.token = null;
        isLoggedIn = false;
      })
      .addCase(logout.rejected, handlerejected);
  },
});

export default slice.reducer;
