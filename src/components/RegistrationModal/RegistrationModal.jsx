import styles from "./RegistrationModal.module.scss";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  REGEX_EMAIL,
  REGEX_PASSWORD,
  REGEX_PHONE,
  FILL_IN_VALID_EMAIL_MSG,
} from "../../util/config";
const RegistrationModal = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  const [userEmail, setUserEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [userEmailFocus, setUserEmailFocus] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [userPhoneFocus, setUserPhoneFocus] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [userPasswordFocus, setUserPasswordFocus] = useState(false);
  const [userConfirmedPsw, setUserConfirmedPsw] = useState("");
  const [isValidConfirmedPsw, setIsValidConfirmedPsw] = useState(false);
  const [userConfirmedPswFocus, setUserConfirmedPswFocus] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setIsValidEmail(REGEX_EMAIL.test(userEmail));
  }, [userEmail]);
  useEffect(() => {
    setIsValidPhone(REGEX_PHONE.test(userPhone));
  }, [userPhone]);
  useEffect(() => {
    setIsValidPassword(REGEX_PASSWORD.test(userPassword));
    setIsValidConfirmedPsw(userPassword === userConfirmedPsw);
  }, [userPassword, userConfirmedPsw]);
  useEffect(() => {
    setErrMessage("");
  }, [userEmail, userPhone, userPassword, userConfirmedPsw]);
  const changeEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const focusEmailInputHandler = () => {
    setUserEmailFocus(true);
  };
  const blurEmailInputHandler = () => {
    setUserEmailFocus(false);
  };
  return (
    <Modal
      size="sm"
      show={props.showModal}
      onHide={props.showModal}
      className={styles["registration_modal"]}
    >
      <div className={styles["registration_modal_content"]}>
        <p ref={errRef} className={errMessage ? "msg_err" : "offscreen"}>
          {errMessage}
        </p>
        <div className={styles["close_btn"]}>
          <CustomButton type="button" onClick={props.hideModal}>
            x
          </CustomButton>
        </div>
        <Form className={styles["registration_modal_content_form"]}>
          <Modal.Header>
            <img
              src={logo}
              alt="Logo"
              className={styles["registration__logo"]}
            />
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formSignUpEmail">
              <Form.Label>
                Enter your email:
                <span className="input_icon">
                  {!userEmail ? (
                    ""
                  ) : isValidEmail ? (
                    <FontAwesomeIcon icon={faCheck} color="green" />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} color="red" />
                  )}
                </span>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email..."
                ref={userRef}
                autoComplete="off"
                onChange={changeEmailHandler}
                onFocus={focusEmailInputHandler}
                onBlur={blurEmailInputHandler}
              />
            </Form.Group>
            <p
              className={
                userEmail && userEmailFocus && !isValidEmail
                  ? "msg_instruction"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {FILL_IN_VALID_EMAIL_MSG}
            </p>
            <br />
            <Form.Group className="mb-3" controlId="formSignUpPhone">
              <Form.Label>Enter your phone:</Form.Label>
              <Form.Control required type="tel" placeholder="Phone..." />
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
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Confirm your password:</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password..."
              />
            </Form.Group>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <CustomButton type="button" onClick={props.hideModal}>
              Cancel
            </CustomButton>
            <CustomButton type="submit">Sign Up</CustomButton>
            <p className={styles["link-to-login"]}>
              Have an account already? Log in &raquo;
            </p>
            <br />
          </Modal.Footer>
        </Form>
      </div>
    </Modal>
  );
};
export default RegistrationModal;
