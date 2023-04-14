import { useState, useEffect } from "react";
const useValidateInput = (regex) => {
  const [userInput, setUserInput] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  useEffect(() => {
    setIsValidInput(regex.test(userInput));
  }, [userInput, regex]);
  const changeInputHandler = (e) => {
    setUserInput(e.target.value);
  };
  return {
    userInput,
    isValidInput,
    changeInputHandler,
  };
};
export default useValidateInput;
