import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import MessageModal from "../MessageModal/MessageModal";
import styles from "./LoginModal.module.scss";
import { useEffect, useRef, useState, Fragment } from "react";
import {
  INVALID_LOGIN_INPUTS,
  LOADING_MSG,
  POST_LOGIN_AUTH_URL,
  LOGIN_AUTH_ERROR,
  USERS_URL,
  LOGIN_URL_ERROR,
  LOGIN_SUCCESS,
} from "../../util/config";
const LoginModal = ({
  showModal,
  hideModal,
  showRegistrationModal,
  authenticateSignInUser,
  submitLoginForm,
}) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [hideMessageModal, setHideMessageModal] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const goToRegistrationHandler = () => {
    hideModal();
    showRegistrationModal();
  };
  const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    if (isLogged && checked) {
      localStorage.setItem("rememberedIronFitUser", JSON.stringify(loggedUser));
    } else {
      localStorage.removeItem("rememberedIronFitUser");
    }
  }, [checked, loggedUser, isLogged]);
  const changeEmailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const changePasswordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const changeCheckBoxHandler = (e) => {
    setChecked(e.target.checked);
  };
  const submitLoginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!emailInput || !passwordInput) {
        throw new Error(INVALID_LOGIN_INPUTS);
      }
      setMessage(LOADING_MSG);
      await authenticateSignInUser(
        POST_LOGIN_AUTH_URL,
        {
          userEmailInput: emailInput,
          userPasswordInput: passwordInput,
        },
        LOGIN_AUTH_ERROR
      );
      const response = await submitLoginForm(USERS_URL, LOGIN_URL_ERROR);
      setMessage(LOGIN_SUCCESS);
      setIsLogged(true);
      const currentUser = Object.values(response).find(
        (user) => user.email === emailInput
      );
      console.log(currentUser);
      setLoggedUser(currentUser);
    } catch (err) {
      setMessage(err.message);
    }
  };
  const hideMessageModalHandler = () => {
    setMessage("");
    setHideMessageModal(true);
    hideModal();
  };
  return (
    <Fragment>
      {message ? (
        <MessageModal
          showMessageModal={!hideMessageModal}
          hideMessageModal={hideMessageModalHandler}
          message={message}
        />
      ) : (
        <Modal
          size="sm"
          show={showModal}
          onHide={showModal}
          className={styles["login_modal"]}
        >
          <div className={styles["login_modal_content"]}>
            <div className={styles["close_btn"]}>
              <CustomButton type="button" onClick={hideModal}>
                x
              </CustomButton>
            </div>
            <Form
              className={styles["login_modal_content_form"]}
              onSubmit={submitLoginHandler}
            >
              <Modal.Header>
                <img src={logo} alt="Logo" className={styles["login__logo"]} />
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formLoginEmail">
                  <Form.Label>Enter your email:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email..."
                    ref={userRef}
                    onChange={changeEmailInputHandler}
                  />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formLoginPassword">
                  <Form.Label>Enter your password:</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password..."
                    onChange={changePasswordInputHandler}
                  />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formLoginCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="remember me"
                    id="loginCheckbox"
                    checked={checked}
                    onChange={changeCheckBoxHandler}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <CustomButton type="button" onClick={hideModal}>
                  Cancel
                </CustomButton>
                <CustomButton type="submit">Log In</CustomButton>
                <p
                  className={styles["link-to-sign-up"]}
                  onClick={goToRegistrationHandler}
                >
                  Do not have an account? Register &raquo;
                </p>
                <br />
              </Modal.Footer>
            </Form>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default LoginModal;
