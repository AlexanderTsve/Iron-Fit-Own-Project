import useToggleFocus from "./use-toggle-focus.js";
import useValidateInput from "./use-validate-input.js";
const useRegistrationRegInput = (regex) => {
  const isValidInputObj = useValidateInput(regex);
  const userInputToggleFocus = useToggleFocus();
  return {
    ...isValidInputObj,
    userInputFocus: userInputToggleFocus.userInputFocus,
    focusInputHandler: userInputToggleFocus.focusInputHandler,
    blurInputHandler: userInputToggleFocus.blurInputHandler,
  };
};
export default useRegistrationRegInput;
