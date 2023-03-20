import { useReducer } from "react";
import { REGEX_PASSWORD } from "../util/config.js";
import useToggleFocus from "./use-toggle-focus.js";
const initPasswordState = {
  passwordValue: "",
  isValidPassword: false,
  confirmedPswValue: "",
  isValidConfirmedPsw: false,
};
const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      passwordValue: action.value,
      isValidPassword: REGEX_PASSWORD.test(action.value),
      confirmedPswValue: state.confirmedPswValue,
      isValidConfirmedPsw:
        state.confirmedPswValue === action.value &&
        REGEX_PASSWORD.test(action.value),
    };
  }
  if (action.type === "CONFIRMED_PSW_INPUT") {
    return {
      passwordValue: state.passwordValue,
      isValidPassword: state.isValidPassword,
      confirmedPswValue: action.value,
      isValidConfirmedPsw:
        state.passwordValue === action.value && state.isValidPassword,
    };
  }
  return initPasswordState;
};
const useRegistrationPasswordInput = () => {
  const [userPasswordState, dispatch] = useReducer(
    passwordReducer,
    initPasswordState
  );
  const userPasswordInputToggleFocus = useToggleFocus();
  const userConfirmedPsdInputToggleFocus = useToggleFocus();
  const changePasswordHandler = (e) => {
    const { id, value } = e.target;
    if (id === "password_input") {
      dispatch({ type: "PASSWORD_INPUT", value });
    }
    if (id === "confirmed_psw_input") {
      dispatch({ type: "CONFIRMED_PSW_INPUT", value });
    }
  };
  return {
    userPasswordState,
    userPasswordInputFocus: userPasswordInputToggleFocus.userInputFocus,
    userConfirmedPswFocus: userConfirmedPsdInputToggleFocus.userInputFocus,
    changePasswordHandler,
    focusPasswordInputHandler: userPasswordInputToggleFocus.focusInputHandler,
    focusConfirmedPsdInputHandler:
      userConfirmedPsdInputToggleFocus.focusInputHandler,
    blurPasswordInputHandler: userPasswordInputToggleFocus.blurInputHandler,
    blurConfirmedPsdInputHandler:
      userConfirmedPsdInputToggleFocus.blurInputHandler,
  };
};
export default useRegistrationPasswordInput;
