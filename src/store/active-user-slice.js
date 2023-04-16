import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  submitAuthenticationLoginFormHandler,
  submitLoginFormDataHandler,
  updateLoggedUser,
} from "../util/helpers";
import {
  POST_LOGIN_AUTH_URL,
  LOGIN_AUTH_ERROR,
  USERS_URL,
  LOGIN_URL_ERROR,
  UNSUCCESSFUL_REQUEST_ORDER_PLAN,
} from "../util/config";
const initialState = {
  loggedUserEmail: "",
  loggedUserPhone: "",
  isLoading: false,
  isLogged: false,
  isRejected: false,
  isChecked: false,
  errorLogin: "",
  orderData: {},
};
export const loginUser = createAsyncThunk(
  "activeUser/login",
  async ({ emailInput, passwordInput }, { rejectWithValue }) => {
    try {
      await submitAuthenticationLoginFormHandler(
        POST_LOGIN_AUTH_URL,
        {
          userEmailInput: emailInput,
          userPasswordInput: passwordInput,
        },
        LOGIN_AUTH_ERROR
      );
      const response = await submitLoginFormDataHandler(
        USERS_URL,
        LOGIN_URL_ERROR
      );
      return Object.values(response).find((user) => user.email === emailInput);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateLoggedInUser = createAsyncThunk(
  "activeUser/update",
  async ({ emailInput, passwordInput }, { rejectWithValue }) => {
    try {
      const response = await updateLoggedUser(
        USERS_URL,
        UNSUCCESSFUL_REQUEST_ORDER_PLAN
      );
      return Object.values(response).find((user) => user.email === emailInput);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    rememberUser: (state) => {
      return {
        ...state,
        isChecked: true,
      };
    },
    activateRememberedUser: (state, { payload }) => {
      return {
        ...state,
        isLogged: true,
        loggedUserEmail: payload.loggedUserEmail,
        loggedUserPhone: payload.loggedUserPhone,
        orderData: payload.orderData || {},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.loggedUserEmail = payload.email;
      state.loggedUserPhone = payload.phone;
      state.orderData = payload.orderData || {};
      state.isLogged = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isRejected = true;
      state.errorLogin = payload;
      state.loggedUserEmail = "";
      state.loggedUserPhone = "";
      state.orderData = {};
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(updateLoggedInUser.fulfilled, (state, { payload }) => {
      state.loggedUserEmail = payload.email;
      state.loggedUserPhone = payload.phone;
      state.orderData = payload.orderData;
      state.isLogged = true;
    });
    builder.addCase(updateLoggedInUser.rejected, (state, { payload }) => {
      state.isRejected = true;
      state.errorLogin = payload;
      state.loggedUserEmail = "";
      state.loggedUserPhone = "";
      state.orderData = {};
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});
const { reducer, actions } = activeUserSlice;
export { actions };
export default reducer;
