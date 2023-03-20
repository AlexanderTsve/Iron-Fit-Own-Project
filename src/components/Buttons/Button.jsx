import styles from "./Buttons.module.scss";
const CustomButton = ({ onClick, className, type, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["iron_fit_app_button"]} ${className || ""}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default CustomButton;
