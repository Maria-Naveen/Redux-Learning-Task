import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/userSlice";
import searchReducer from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    search: searchReducer,
  },
});
