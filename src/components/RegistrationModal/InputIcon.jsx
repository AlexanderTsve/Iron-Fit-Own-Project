import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputIcon = ({ userInput, isValidInput }) => {
  return (
    <span>
      {!userInput ? (
        ""
      ) : isValidInput ? (
        <FontAwesomeIcon icon={faCheck} color="green" />
      ) : (
        <FontAwesomeIcon icon={faTimes} color="red" />
      )}
    </span>
  );
};
export default InputIcon;
