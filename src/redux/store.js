import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./redux/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
