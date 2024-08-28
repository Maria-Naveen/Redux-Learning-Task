import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "John", age: 23, degree: "BE" },
    { id: 2, name: "Sam", age: 24, degree: "Arts" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.users;

export default userSlice.reducer;
