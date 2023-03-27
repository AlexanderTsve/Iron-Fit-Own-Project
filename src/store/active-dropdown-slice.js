import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activeDropdown: "",
};
export const activeDropdownSlice = createSlice({
  name: "activeDropdown",
  initialState,
  reducers: {
    activateTimetablesDropdown: () => {
      return {
        activeDropdown: "/timetables",
      };
    },
    activateClubsDropdown: () => {
      return {
        activeDropdown: "/clubs",
      };
    },
    reset: () => {
      return initialState;
    },
  },
});
const changeDropdownAction = activeDropdownSlice.actions;
const { reducer } = activeDropdownSlice;
export { changeDropdownAction };
export default reducer;
