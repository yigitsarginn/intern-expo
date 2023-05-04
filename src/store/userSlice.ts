import { createSlice } from "@reduxjs/toolkit";

type User = {
  age: number;
  gender: "male" | "female" | "no_gender";
};

const initialState: User = {
  age: 26,
  gender: "no_gender",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const UserActions = userSlice.actions;
export default userSlice.reducer;
