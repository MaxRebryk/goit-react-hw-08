import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
import { createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;
