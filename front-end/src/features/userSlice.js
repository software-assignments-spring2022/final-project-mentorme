import { createSlice } from '@reduxjs/toolkit';
import appApi from "../services/appApi";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => { },
    resetNotifications: (state, { payload }) => { },
  },
  extraRducers: (builder) => {
    builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload);
    builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => payload);
    builder.addMatcher(appApi.endpoints.logout.matchFulfilled, () => null);


  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;