import Form from "react-bootstrap/Form";
import InputIcon from "./InputIcon";
const InputField = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>
        {props.children}
        <InputIcon
          userInput={props.userInput}
          isValidInput={props.isValidInput}
        />
      </Form.Label>
      <Form.Control
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        ref={props.reference}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </Form.Group>
  );
};
export default InputField;
