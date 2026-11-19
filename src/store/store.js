
import { configureStore } from "@reduxjs/toolkit";
import getWebProjectSlice from "./slices/getWebProjectSlice";

const store = configureStore({
  reducer: {
    projects: getWebProjectSlice,
  },
});

export default store;
