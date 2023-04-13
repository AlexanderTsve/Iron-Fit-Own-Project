import styles from "./OrderForm.module.scss";
import { CLUB_NAMES } from "../../../util/config";
import CustomButton from "../../../components/Buttons/Button";
import OrderFormNameInput from "./OrderFormNameInput/OrderFormNameInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getPrices, getUsers } from "../../../util/helpers.js";
import {
  PRICES_URL,
  UNSUCCESSFUL_REQUEST,
  USERS_URL,
} from "../../../util/config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
const OrderForm = ({ plan, hideOrderForm }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isRejected, setIsRejected] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.activeUser);
  const changeDateHandler = (date) => {
    setStartDate(date);
  };
  const hideModalHandler = () => {
    hideOrderForm();
  };
  const submitOrderFormHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const prices = await getPrices(PRICES_URL, UNSUCCESSFUL_REQUEST);
      const currentPlan = Object.values(prices)[0].find(
        (pricePlan) => pricePlan.name === plan
      );
      const users = await getUsers(USERS_URL, UNSUCCESSFUL_REQUEST);
      const currentUser = Object.entries(users).find(
        (array) => array[1].email === user.loggedUserEmail
      );
      console.log(currentUser);
    } catch (err) {
      setIsRejected(true);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={submitOrderFormHandler} className={styles["order_modal"]}>
      <div className={styles["order_modal_content"]}>
        {isLoading && <p>Loading...</p>}
        {isRejected && <ErrorMessage errorMsg={error} />}
        <OrderFormNameInput
          label="First Name (as per your ID):"
          placeholder="First Name..."
        />
        <OrderFormNameInput
          label="Middle Name (as per your ID):"
          placeholder="Middle Name..."
        />
        <OrderFormNameInput
          label="Last Name (as per your ID):"
          placeholder="Last Name..."
        />
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
          <CustomButton onClick={hideModalHandler}>Cancel</CustomButton>
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </div>
    </form>
  );
};
export default OrderForm;
