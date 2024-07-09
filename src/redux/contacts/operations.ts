import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBaseUrl } from "../baseUrl";

setBaseUrl();

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface NewContact {
  name: string;
  number: string;
}

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact: NewContact, thunkApi) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return { id: contactId };
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
