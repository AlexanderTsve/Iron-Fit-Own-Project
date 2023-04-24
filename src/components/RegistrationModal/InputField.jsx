import Form from "react-bootstrap/Form";
import InputIcon from "./InputIcon";
import InputInstruction from "./InputInstruction";
import { Fragment } from "react";
import { InputGroup } from "react-bootstrap";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./InputField.module.scss";
import EyeIcon from "../EyeIcon/EyeIcon";
const InputField = (props) => {
  const [visiblePsw, setVisiblePsw] = useState(false);
  const toggleVisiblePswHandler = () => {
    setVisiblePsw(!visiblePsw);
  };
  return (
    <Fragment>
      <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>
          {props.children}
          <InputIcon
            userInput={props.userInput}
            isValidInput={props.isValidInput}
          />
        </Form.Label>
        <InputGroup>
          <Form.Control
            required={props.required}
            type={
              props.placeholder === "Password..." && visiblePsw
                ? "text"
                : props.type
            }
            placeholder={props.placeholder}
            ref={props.reference}
            autoComplete={props.autoComplete}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            className={
              props.placeholder === "Password..."
                ? styles["password-input"]
                : styles["reg-input"]
            }
          />
          {props.placeholder === "Password..." ? (
            <EyeIcon
              onClick={toggleVisiblePswHandler}
              icon={visiblePsw ? faEye : faEyeSlash}
            />
          ) : (
            ""
          )}
        </InputGroup>
      </Form.Group>
      <InputInstruction
        showInstruction={props.showInstruction}
        message={props.message}
      />
    </Fragment>
  );
};
export default InputField;
