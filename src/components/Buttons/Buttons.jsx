import styles from "./Buttons.module.scss";
const Button = (props) => {
  return (
    <button
      className={`${styles["iron_fit_app_button"]} ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
