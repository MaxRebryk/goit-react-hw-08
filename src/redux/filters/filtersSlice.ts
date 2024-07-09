import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  name: string;
}

const initialState: FilterState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;
