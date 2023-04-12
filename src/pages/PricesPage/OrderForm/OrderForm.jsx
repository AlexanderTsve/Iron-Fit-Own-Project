import styles from "./OrderForm.module.scss";
import { CLUB_NAMES } from "../../../util/config";
import CustomButton from "../../../components/Buttons/Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const OrderForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const changeDateHandler = (date) => {
    setStartDate(date);
  };
  return (
    <form className={styles["order_modal"]}>
      <div className={styles["order_modal_content"]}>
        <div className={styles["order_modal_component"]}>
          <label className={styles["order_modal_component_label"]}>
            First Name (as per your ID):
          </label>
          <input
            className={styles["order_modal_component_input"]}
            required
            type="text"
            placeholder="First Name..."
          />
        </div>
        <div className={styles["order_modal_component"]}>
          <label className={styles["order_modal_component_label"]}>
            Middle Name (as per your ID):
          </label>
          <input
            className={styles["order_modal_component_input"]}
            required
            type="text"
            placeholder="Middle Name..."
          />
        </div>
        <div className={styles["order_modal_component"]}>
          <label className={styles["order_modal_component_label"]}>
            Last Name (as per your ID):
          </label>
          <input
            className={styles["order_modal_component_input"]}
            required
            type="text"
            placeholder="Last Name..."
          />
        </div>
        <div className={styles["order_modal_component"]}>
          <label className={styles["order_modal_component_label"]}>
            Choose club:
          </label>
          <select className={styles["order_modal_component_list"]}>
            <option value="none"></option>
            {CLUB_NAMES.map((club, index) => (
              <option value={club} key={index}>
                {club}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["order_modal_component"]}>
          <label className={styles["order_modal_component_label"]}>
            Choose starting date:
          </label>
          <DatePicker
            wrapperClassName={styles.datePicker}
            selected={startDate}
            onChange={changeDateHandler}
            minDate={new Date()}
          />
        </div>
        <div>
          <CustomButton>Cancel</CustomButton>
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </div>
    </form>
  );
};
export default OrderForm;
