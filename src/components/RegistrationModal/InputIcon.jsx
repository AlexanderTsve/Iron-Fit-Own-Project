import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputIcon = (props) => {
  return (
    <span>
      {!props.userInput ? (
        ""
      ) : props.isValidInput ? (
        <FontAwesomeIcon icon={faCheck} color="green" />
      ) : (
        <FontAwesomeIcon icon={faTimes} color="red" />
      )}
    </span>
  );
};
export default InputIcon;
