import styles from "./Buttons.module.scss";
const CustomButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles["iron_fit_app_button"]} ${props.className || ""}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default CustomButton;
