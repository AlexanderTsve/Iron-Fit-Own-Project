import styles from "./RegistrationModal.module.scss";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import InputIcon from "./InputIcon";
import InputInstruction from "./InputInstruction";
import { useState, useEffect, useRef } from "react";
import {
  REGEX_EMAIL,
  REGEX_PASSWORD,
  REGEX_PHONE,
  FILL_IN_VALID_EMAIL_MSG,
  FILL_IN_VALID_PHONE_MSG,
  FILL_IN_VALID_PASSWORD_MSG,
  CONFIRM_VALID_PSW_MSG,
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
    setIsValidConfirmedPsw(
      userPassword === userConfirmedPsw && isValidPassword
    );
  }, [userPassword, userConfirmedPsw, isValidPassword]);
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
  const changePhoneHandler = (e) => {
    setUserPhone(e.target.value);
  };
  const focusPhoneInputHandler = () => {
    setUserPhoneFocus(true);
  };
  const blurPhoneInputHandler = () => {
    setUserPhoneFocus(false);
  };
  const changePasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };
  const focusPasswordHandler = () => {
    setUserPasswordFocus(true);
  };
  const blurPasswordHandler = () => {
    setUserPasswordFocus(false);
  };
  const changeConfirmedPsw = (e) => {
    setUserConfirmedPsw(e.target.value);
  };
  const focusConfirmedPsw = () => {
    setUserConfirmedPswFocus(true);
  };
  const blurConfirmedPsw = () => {
    setUserConfirmedPswFocus(false);
  };
  const goToLoginHandler = () => {
    props.hideModal();
    props.showLoginModal();
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
                <InputIcon userInput={userEmail} isValidInput={isValidEmail} />
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
            <InputInstruction
              showInstruction={userEmailFocus && userEmail && !isValidEmail}
              message={FILL_IN_VALID_EMAIL_MSG}
            />
            <br />
            <Form.Group className="mb-3" controlId="formSignUpPhone">
              <Form.Label>
                Enter your phone:
                <InputIcon userInput={userPhone} isValidInput={isValidPhone} />
              </Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Phone..."
                autoComplete="off"
                onChange={changePhoneHandler}
                onFocus={focusPhoneInputHandler}
                onBlur={blurPhoneInputHandler}
              />
            </Form.Group>
            <InputInstruction
              showInstruction={userPhoneFocus && userPhone && !isValidPhone}
              message={FILL_IN_VALID_PHONE_MSG}
            />
            <br />
            <Form.Group className="mb-3" controlId="formSignUpPassword">
              <Form.Label>
                Enter your password:
                <InputIcon
                  userInput={userPassword}
                  isValidInput={isValidPassword}
                />
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password..."
                onChange={changePasswordHandler}
                onFocus={focusPasswordHandler}
                onBlur={blurPasswordHandler}
              />
            </Form.Group>
            <InputInstruction
              showInstruction={
                userPasswordFocus && userPassword && !isValidPassword
              }
              message={FILL_IN_VALID_PASSWORD_MSG}
            />
            <br />
            <Form.Group
              className="mb-3"
              controlId="formSignUpConfirmedPassword"
            >
              <Form.Label>
                Confirm your password:
                <InputIcon
                  userInput={userConfirmedPsw}
                  isValidInput={isValidConfirmedPsw || !userConfirmedPsw}
                />
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password..."
                onChange={changeConfirmedPsw}
                onFocus={focusConfirmedPsw}
                onBlur={blurConfirmedPsw}
              />
            </Form.Group>
            <InputInstruction
              showInstruction={
                userConfirmedPsw &&
                userConfirmedPswFocus &&
                !isValidConfirmedPsw
              }
              message={CONFIRM_VALID_PSW_MSG}
            />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <CustomButton type="button" onClick={props.hideModal}>
              Cancel
            </CustomButton>
            <CustomButton
              disabled={
                !isValidEmail ||
                !isValidPassword ||
                !isValidPhone ||
                !isValidConfirmedPsw
              }
              type="submit"
            >
              Sign Up
            </CustomButton>
            <p className={styles["link-to-login"]} onClick={goToLoginHandler}>
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
