import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

type Contact = {
  id: string;
  name: string;
  number: string;
};

interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: unknown | null;
}

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state: ContactsState) => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (
  state: ContactsState,
  action: PayloadAction<unknown>
) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.error = null;
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.error = null;
          state.loading = false;
          state.items.push(action.payload);
        }
      )
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.error = null;
          state.loading = false;
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      )
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export default slice.reducer;
