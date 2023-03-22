// import Button from "react-bootstrap/Button";
import CustomButton from "../Buttons/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./MessageModal.module.scss";
const MessageModal = (props) => {
  return (
    <Modal
      show={props.showMessageModal}
      onHide={props.hideMessageModal}
      className={styles["modal_message"]}
    >
      <Modal.Header className={styles["modal_message-header"]}>
        <CustomButton onClick={props.hideMessageModal}>x</CustomButton>
      </Modal.Header>
      <Modal.Body className={styles["modal_message-content"]}>
        {props.message}
      </Modal.Body>
      <Modal.Footer className={styles["modal_message-footer"]}>
        <CustomButton onClick={props.hideMessageModal}>Close</CustomButton>
      </Modal.Footer>
    </Modal>
  );
};
export default MessageModal;
