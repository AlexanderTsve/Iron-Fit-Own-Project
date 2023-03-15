import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import styles from "./LoginModal.module.scss";
const LoginModal = (props) => {
  return (
    <Modal
      size="sm"
      show={props.showModal}
      onHide={props.showModal}
      className={styles["login_modal"]}
    >
      <div className={styles["login_modal_content"]}>
        <div className={styles["close_btn"]}>
          <CustomButton type="button" onClick={props.hideModal}>
            x
          </CustomButton>
        </div>
        <Form className={styles["login_modal_content_form"]}>
          <Modal.Header>
            <img src={logo} alt="Logo" className={styles["login__logo"]} />
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Enter your email:</Form.Label>
              <Form.Control required type="text" placeholder="Email..." />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Enter your password:</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password..."
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formLoginCheckbox">
              <Form.Check
                type="checkbox"
                label="remember me"
                id="loginCheckbox"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton type="button" onClick={props.hideModal}>
              Cancel
            </CustomButton>
            <CustomButton type="submit">Log In</CustomButton>
            <p className={styles["link-to-sign-up"]}>
              Do not have an account? Register &raquo;
            </p>
            <br />
          </Modal.Footer>
        </Form>
      </div>
    </Modal>
  );
};
export default LoginModal;
