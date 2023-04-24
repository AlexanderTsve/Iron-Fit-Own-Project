import styles from "./DropdownFilter.module.scss";
const DropdownFilter = ({ reference, label, options, onChange }) => {
  return (
    <div className={styles["table-dropdown"]}>
      <label className={styles["table-dropdown_label"]}>{label}</label>
      <select
        ref={reference}
        onChange={onChange}
        className={styles["table-dropdown_list"]}
      >
        <option value="none"></option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropdownFilter;
