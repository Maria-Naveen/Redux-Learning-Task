import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./dataAPI"; // Assuming this is your fetch action

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUserToList: (state, action) => {
      state.items.push(action.payload); // Add the new user to the list
    },
    removeUserFromList: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the action creator
export const { addUserToList, removeUserFromList } = userSlice.actions;
export default userSlice.reducer;
