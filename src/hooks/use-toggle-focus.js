import { useState } from "react";
const useToggleFocus = () => {
  const [userInputFocus, setUserInputFocus] = useState(false);
  const focusInputHandler = () => {
    setUserInputFocus(true);
  };
  const blurInputHandler = () => {
    setUserInputFocus(false);
  };
  return {
    userInputFocus,
    focusInputHandler,
    blurInputHandler,
  };
};
export default useToggleFocus;
