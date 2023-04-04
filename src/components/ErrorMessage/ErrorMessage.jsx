import styles from "./ErrorMessage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
const ErrorMessage = ({ errorMsg }) => {
  return (
    <div className={styles.error}>
      <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
      <h1 className={styles.rejected}>{errorMsg}</h1>
    </div>
  );
};
export default ErrorMessage;
