import { useState, useEffect } from "react";
const useRegistrationInput = (regex) => {
  const [userInput, setUserInput] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [userInputFocus, setUserInputFocus] = useState(false);
  useEffect(() => {
    setIsValidInput(regex.test(userInput));
  }, [userInput, regex]);
  const changeInputHandler = (e) => {
    setUserInput(e.target.value);
  };
  const focusInputHandler = () => {
    setUserInputFocus(true);
  };
  const blurInputHandler = () => {
    setUserInputFocus(false);
  };
  return {
    userInput,
    isValidInput,
    userInputFocus,
    changeInputHandler,
    focusInputHandler,
    blurInputHandler,
  };
};
export default useRegistrationInput;
