import { useState, useEffect } from "react";
import useToggleFocus from "./use-toggle-focus.js";
const useRegistrationRegInput = (regex) => {
  const [userInput, setUserInput] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const userInputToggleFocus = useToggleFocus();
  useEffect(() => {
    setIsValidInput(regex.test(userInput));
  }, [userInput, regex]);
  const changeInputHandler = (e) => {
    setUserInput(e.target.value);
  };
  return {
    userInput,
    isValidInput,
    userInputFocus: userInputToggleFocus.userInputFocus,
    changeInputHandler,
    focusInputHandler: userInputToggleFocus.focusInputHandler,
    blurInputHandler: userInputToggleFocus.blurInputHandler,
  };
};
export default useRegistrationRegInput;
