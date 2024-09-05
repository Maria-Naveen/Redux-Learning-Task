import { createAsyncThunk, createAction, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const addUser = createAction("users/addUser", (name, email, city) => ({
  payload: {
    id: nanoid(), // Generate a unique ID
    name,
    username: "DefaultUsername", // You can set a default or allow user input
    email,
    address: {
      street: "Default Street", // Set default values or allow user input
      suite: "Default Suite",
      city,
      zipcode: "00000", // Default zipcode
      geo: {
        lat: "0.0000",
        lng: "0.0000",
      },
    },
    phone: "000-000-0000", // Default phone number
    website: "defaultwebsite.com", // Default website
    company: {
      name: "Default Company",
      catchPhrase: "Default Catchphrase",
      bs: "Default BS",
    },
  },
}));
