import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
import { RootState } from "../store";
import { Contact } from "../../components/ContactList/ContactList";

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectFilteredcontacts = createSelector(
  [selectNameFilter, selectContacts],
  (nameFilter, contacts) => {
    return contacts.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
