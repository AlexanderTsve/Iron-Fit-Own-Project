import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getClubs } from "../util/helpers.js";
import { CLUBS_URL, UNSUCCESSFUL_REQUEST } from "../util/config.js";
const initialState = {
  list: [],
  isLoading: false,
  isRejected: false,
  errorMsg: "",
};
export const sendClubsRequest = createAsyncThunk(
  "clubs/list",
  async (
    { url = CLUBS_URL, errMsg = UNSUCCESSFUL_REQUEST },
    { rejectWithValue }
  ) => {
    try {
      const data = await getClubs(url, errMsg);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  []
);
export const clubsSlice = createSlice({
  name: "clubs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendClubsRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendClubsRequest.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = Object.values(payload)[0];
    });
    builder.addCase(sendClubsRequest.rejected, (state, { payload }) => {
      state.isRejected = true;
      state.isLoading = false;
      state.errorMsg = payload;
    });
  },
});
const { reducer, actions } = clubsSlice;
export { actions };
export default reducer;
