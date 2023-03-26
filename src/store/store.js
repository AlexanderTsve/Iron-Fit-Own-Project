import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./active-user-slice.js";
const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
});
export default store;
