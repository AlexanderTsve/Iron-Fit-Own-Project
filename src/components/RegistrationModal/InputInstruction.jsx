import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const InputInstruction = (props) => {
  return (
    props.showInstruction && (
      <p>
        <FontAwesomeIcon icon={faInfoCircle} />
        {props.message}
      </p>
    )
  );
};
export default InputInstruction;
