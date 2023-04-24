import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./active-user-slice.js";
import activeDropdownReducer from "./active-dropdown-slice.js";
import clubsReducer from "./clubs-slice.js";
const togglePersistUserMiddleware = (storeAPI) => (next) => (action) => {
  const state = storeAPI.getState();
  if (action.type === "activeUser/rememberUser") {
    localStorage.setItem(
      "rememberedIronFitUser",
      JSON.stringify({
        loggedUserEmail: state.activeUser.loggedUserEmail,
        loggedUserPhone: state.activeUser.loggedUserPhone,
        orderData: state.activeUser.orderData || {},
      })
    );
  }
  if (action.type === "activeUser/reset") {
    localStorage.removeItem("rememberedIronFitUser");
  }
  return next(action);
};
const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    activeDropdown: activeDropdownReducer,
    clubsList: clubsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(togglePersistUserMiddleware),
});
export default store;
