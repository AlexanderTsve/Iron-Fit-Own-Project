import styles from "./OrderFormNameInput.module.scss";
const OrderFormNameInput = ({ label, placeholder, reference }) => {
  return (
    <div className={styles["order_modal_component"]}>
      <label className={styles["order_modal_component_label"]}>{label}</label>
      <input
        ref={reference}
        className={styles["order_modal_component_input"]}
        required
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
export default OrderFormNameInput;
