import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppSliceType = {
  initialLaunch: boolean;
  unitPreference: UnitSystem;
  hasRated: boolean;
};

const initialState: AppSliceType = {
  initialLaunch: true,
  unitPreference: "metric",
  hasRated: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialLaunch: (state, action: PayloadAction<boolean>) => {
      state.initialLaunch = action.payload;
    },
    setUnitPreference: (
      state,
      action: PayloadAction<"metric" | "imperial">
    ) => {
      state.unitPreference = action.payload;
    },
    setHasRated: (state, action: PayloadAction<boolean>) => {
      state.hasRated = action.payload;
    },
  },
});

export const appActions = AppSlice.actions;
export default AppSlice.reducer;
