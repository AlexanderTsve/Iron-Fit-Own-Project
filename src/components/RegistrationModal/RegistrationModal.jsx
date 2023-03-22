import styles from "./RegistrationModal.module.scss";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/images/logo.png";
import CustomButton from "../Buttons/Button";
import InputField from "./InputField";
import MessageModal from "../MessageModal/MessageModal";
import useRegistrationRegInput from "../../hooks/use-registration_reg-input.js";
import useRegistrationPasswordInput from "../../hooks/use-registration-password-input";
import { useState, useEffect, useRef, Fragment } from "react";
import {
  REGEX_EMAIL,
  REGEX_PHONE,
  FILL_IN_VALID_EMAIL_MSG,
  FILL_IN_VALID_PHONE_MSG,
  FILL_IN_VALID_PASSWORD_MSG,
  CONFIRM_VALID_PSW_MSG,
  POST_REGISTRATION_AUTH_URL,
  REGISTRATION_AUTH_ERROR,
  USERS_URL,
  REGISTRATION_SUCCESS,
} from "../../util/config";
const RegistrationModal = ({
  hideModal,
  showModal,
  showLoginModal,
  authenticateSignUpUser,
  submitRegistrationForm,
}) => {
  const userRef = useRef();
  const userEmailInput = useRegistrationRegInput(REGEX_EMAIL);
  const userPhoneInput = useRegistrationRegInput(REGEX_PHONE);
  const passwordInputs = useRegistrationPasswordInput();
  const [formIsValid, setFormIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [hideMessageModal, setHideMessageModal] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    userEmailInput.isValidInput &&
    passwordInputs.userPasswordState.isValidPassword &&
    userPhoneInput.isValidInput &&
    passwordInputs.userPasswordState.isValidConfirmedPsw
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [
    passwordInputs.userPasswordState.isValidConfirmedPsw,
    passwordInputs.userPasswordState.isValidPassword,
    userEmailInput.isValidInput,
    userPhoneInput.isValidInput,
  ]);
  const goToLoginHandler = () => {
    hideModal();
    showLoginModal();
  };
  const submitRegistrationHandler = async (e) => {
    e.preventDefault();
    if (
      !userEmailInput.isValidInput ||
      !userPhoneInput.isValidInput ||
      !passwordInputs.userPasswordState.isValidPassword ||
      !passwordInputs.userPasswordState.isValidConfirmedPsw
    ) {
      return;
    }
    try {
      await authenticateSignUpUser(
        POST_REGISTRATION_AUTH_URL,
        {
          userEmailInput: userEmailInput.userInput,
          userPasswordInput: passwordInputs.userPasswordState.passwordValue,
        },
        REGISTRATION_AUTH_ERROR
      );
      await submitRegistrationForm(USERS_URL, {
        userEmailInput: userEmailInput.userInput,
        userPhoneInput: userPhoneInput.userInput,
      });
      setMessage(REGISTRATION_SUCCESS);
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
          className={styles["registration_modal"]}
        >
          <div className={styles["registration_modal_content"]}>
            <div className={styles["close_btn"]}>
              <CustomButton type="button" onClick={hideModal}>
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
                <InputField
                  userInput={userEmailInput.userInput}
                  isValidInput={userEmailInput.isValidInput}
                  required={true}
                  type="email"
                  placeholder="Email..."
                  reference={userRef}
                  autoComplete="off"
                  onChange={userEmailInput.changeInputHandler}
                  onFocus={userEmailInput.focusInputHandler}
                  onBlur={userEmailInput.blurInputHandler}
                  showInstruction={
                    userEmailInput.userInputFocus &&
                    userEmailInput.userInput &&
                    !userEmailInput.isValidInput
                  }
                  message={FILL_IN_VALID_EMAIL_MSG}
                >
                  Enter your email:
                </InputField>
                <br />
                <InputField
                  required={true}
                  userInput={userPhoneInput.userInput}
                  isValidInput={userPhoneInput.isValidInput}
                  type="tel"
                  placeholder="Phone..."
                  autoComplete="off"
                  onChange={userPhoneInput.changeInputHandler}
                  onFocus={userPhoneInput.focusInputHandler}
                  onBlur={userPhoneInput.blurInputHandler}
                  showInstruction={
                    userPhoneInput.userInputFocus &&
                    userPhoneInput.userInput &&
                    !userPhoneInput.isValidInput
                  }
                  message={FILL_IN_VALID_PHONE_MSG}
                >
                  Enter your phone:
                </InputField>
                <br />
                <InputField
                  controlId="password_input"
                  userInput={passwordInputs.userPasswordState.passwordValue}
                  isValidInput={
                    passwordInputs.userPasswordState.isValidPassword
                  }
                  required={true}
                  type="password"
                  placeholder="Password..."
                  onChange={passwordInputs.changePasswordHandler}
                  onFocus={passwordInputs.focusPasswordInputHandler}
                  onBlur={passwordInputs.blurPasswordInputHandler}
                  showInstruction={
                    passwordInputs.userPasswordInputFocus &&
                    passwordInputs.userPasswordState.passwordValue &&
                    !passwordInputs.userPasswordState.isValidPassword
                  }
                  message={FILL_IN_VALID_PASSWORD_MSG}
                >
                  Enter your password:
                </InputField>
                <br />
                <InputField
                  controlId="confirmed_psw_input"
                  userInput={passwordInputs.userPasswordState.confirmedPswValue}
                  isValidInput={
                    passwordInputs.userPasswordState.isValidConfirmedPsw ||
                    !passwordInputs.userPasswordState.confirmedPswValue
                  }
                  required={true}
                  type="password"
                  placeholder="Password..."
                  onChange={passwordInputs.changePasswordHandler}
                  onFocus={passwordInputs.focusConfirmedPsdInputHandler}
                  onBlur={passwordInputs.blurConfirmedPsdInputHandler}
                  showInstruction={
                    passwordInputs.userPasswordState.confirmedPswValue &&
                    passwordInputs.userConfirmedPswFocus &&
                    !passwordInputs.userPasswordState.isValidConfirmedPsw
                  }
                  message={CONFIRM_VALID_PSW_MSG}
                >
                  Confirm your password:
                </InputField>
                <br />
              </Modal.Body>
              <Modal.Footer>
                <CustomButton type="button" onClick={hideModal}>
                  Cancel
                </CustomButton>
                <CustomButton disabled={!formIsValid} type="submit">
                  Sign Up
                </CustomButton>
                <p
                  className={styles["link-to-login"]}
                  onClick={goToLoginHandler}
                >
                  Have an account already? Log in &raquo;
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
export default RegistrationModal;
