import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const InputInstruction = ({ showInstruction, message }) => {
  return (
    showInstruction && (
      <p>
        <FontAwesomeIcon icon={faInfoCircle} />
        {message}
      </p>
    )
  );
};
export default InputInstruction;
