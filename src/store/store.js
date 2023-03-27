import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./active-user-slice.js";
import activeDropdownReducer from "./active-dropdown-slice.js";
const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    activeDropdown: activeDropdownReducer,
  },
});
export default store;
