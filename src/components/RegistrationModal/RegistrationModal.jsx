import styles from "./RegistrationModal.module.scss";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import InputIcon from "./InputIcon";
import InputInstruction from "./InputInstruction";
import useRegistrationInput from "../../hooks/use-registration-input.js";
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
  const userEmailInput = useRegistrationInput(REGEX_EMAIL);
  const userPhoneInput = useRegistrationInput(REGEX_PHONE);
  const [userPassword, setUserPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [userPasswordFocus, setUserPasswordFocus] = useState(false);
  const [userConfirmedPsw, setUserConfirmedPsw] = useState("");
  const [isValidConfirmedPsw, setIsValidConfirmedPsw] = useState(false);
  const [userConfirmedPswFocus, setUserConfirmedPswFocus] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setIsValidPassword(REGEX_PASSWORD.test(userPassword));
    setIsValidConfirmedPsw(
      userPassword === userConfirmedPsw && isValidPassword
    );
  }, [userPassword, userConfirmedPsw, isValidPassword]);
  useEffect(() => {
    userEmailInput.isValidInput &&
    isValidPassword &&
    userPhoneInput.isValidInput &&
    isValidConfirmedPsw
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [
    isValidConfirmedPsw,
    userEmailInput.isValidInput,
    isValidPassword,
    userPhoneInput.isValidInput,
  ]);
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
  const submitRegistrationHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Modal
      size="sm"
      show={props.showModal}
      onHide={props.showModal}
      className={styles["registration_modal"]}
    >
      <div className={styles["registration_modal_content"]}>
        <div className={styles["close_btn"]}>
          <CustomButton type="button" onClick={props.hideModal}>
            x
          </CustomButton>
        </div>
        <Form
          className={styles["registration_modal_content_form"]}
          onSubmit={submitRegistrationHandler}
        >
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
                <InputIcon
                  userInput={userEmailInput.userInput}
                  isValidInput={userEmailInput.isValidInput}
                />
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email..."
                ref={userRef}
                autoComplete="off"
                onChange={userEmailInput.changeInputHandler}
                onFocus={userEmailInput.focusInputHandler}
                onBlur={userEmailInput.blurInputHandler}
              />
            </Form.Group>
            <InputInstruction
              showInstruction={
                userEmailInput.userInputFocus &&
                userEmailInput.userInput &&
                !userEmailInput.isValidInput
              }
              message={FILL_IN_VALID_EMAIL_MSG}
            />
            <br />
            <Form.Group className="mb-3" controlId="formSignUpPhone">
              <Form.Label>
                Enter your phone:
                <InputIcon
                  userInput={userPhoneInput.userInput}
                  isValidInput={userPhoneInput.isValidInput}
                />
              </Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Phone..."
                autoComplete="off"
                onChange={userPhoneInput.changeInputHandler}
                onFocus={userPhoneInput.focusInputHandler}
                onBlur={userPhoneInput.blurInputHandler}
              />
            </Form.Group>
            <InputInstruction
              showInstruction={
                userPhoneInput.userInputFocus &&
                userPhoneInput.userInput &&
                !userPhoneInput.isValidInput
              }
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
            <CustomButton disabled={!formIsValid} type="submit">
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
