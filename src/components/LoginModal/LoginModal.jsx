import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const LoginModal = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal size="sm" show={show}>
      <div className="h-25 fst-italic login-style">
        <Form>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3 text-style"
              controlId="formLoginUsername"
            >
              <Form.Label>Enter your username:</Form.Label>
              <Form.Control required type="text" placeholder="Username..." />
            </Form.Group>
            <br />
            <Form.Group
              className="mb-3 text-style"
              controlId="formLoginPassword"
            >
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
            <Form.Group className="mb-3 text-style" controlId="btnLogin">
              <button
                className="btn btn-outline-goldLight rounded-2 px-4"
                type="submit"
              >
                Log In
              </button>
            </Form.Group>
            <Form.Group className="text-style" controlId="linkReg">
              <p className="register-link">
                Do not have an account? Register &raquo;
              </p>
              <br />
            </Form.Group>
          </Modal.Body>
        </Form>
      </div>
    </Modal>
  );
};
export default LoginModal;
