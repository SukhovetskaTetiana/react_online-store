import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [
      {
        firstName: "Alex",
        email: "alex@lala.la",
        phone: "555-0-555",
        address: "Kharkiv, Kovalenko str, 5",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export const selectUser = (state) => state.user.data;
export default userSlice.reducer;
