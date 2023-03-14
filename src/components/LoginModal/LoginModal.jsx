import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import Button from "../Buttons/Buttons";
import styles from "./LoginModal.module.scss";
const LoginModal = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      size="sm"
      show={show}
      onHide={handleClose}
      className={styles["login_modal"]}
    >
      <div className={styles["login_modal_content"]}>
        <div className={styles["close_btn"]}>
          <Button type="button">x</Button>
        </div>
        <Form className={styles["login_modal_content_form"]}>
          <Modal.Header>
            <img src={logo} alt="Logo" className={styles["login__logo"]} />
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formLoginUsername">
              <Form.Label>Enter your username:</Form.Label>
              <Form.Control required type="text" placeholder="Username..." />
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
            <Button type="button">Cancel</Button>
            <Button type="submit">Log In</Button>
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
