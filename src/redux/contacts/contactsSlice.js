import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

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
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handlerejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handlerejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handlerejected);
  },
});

export default slice.reducer;
