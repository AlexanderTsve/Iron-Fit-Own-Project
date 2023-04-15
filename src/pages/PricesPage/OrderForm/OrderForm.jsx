import styles from "./OrderForm.module.scss";
import {
  CLUB_NAMES,
  LOADING_MSG,
  REGEX_NAME,
  INVALID_INPUT_DATA_ORDER_PLAN,
  INVALID_CLUB_DATA_ORDER_PLAN,
  PRICES_URL,
  UNSUCCESSFUL_REQUEST,
  USERS_URL,
  UNSUCCESSFUL_REQUEST_ORDER_PLAN,
} from "../../../util/config";
import CustomButton from "../../../components/Buttons/Button";
import { useState, useRef, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  getPrices,
  getUsers,
  updateUserOrderData,
} from "../../../util/helpers.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MessageModal from "../../../components/MessageModal/MessageModal";
import useValidateInput from "../../../hooks/use-validate-input";
const OrderForm = ({ plan, hideOrderForm }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const user = useSelector((state) => state.activeUser);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const clubsRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const changeDateHandler = (date) => {
    setStartDate(date);
  };
  const hideModalHandler = () => {
    hideOrderForm();
  };
  const hideMessageModalHandler = () => {
    setShowMessageModal(false);
    setIsLoading(false);
    setIsRejected(false);
    setIsSuccess(false);
    setError("");
    setIsSubmitted(false);
    setFormIsValid(false);
  };
  const validateForm = () => {
    const formIsValid =
      REGEX_NAME.test(firstNameRef.current.value) &&
      REGEX_NAME.test(lastNameRef.current.value) &&
      CLUB_NAMES.some((club) => club === clubsRef.current.value);
    try {
      if (!formIsValid) {
        if (
          !REGEX_NAME.test(firstNameRef.current.value) ||
          !REGEX_NAME.test(lastNameRef.current.value)
        ) {
          throw new Error(INVALID_INPUT_DATA_ORDER_PLAN);
        }
        if (!CLUB_NAMES.some((club) => club === clubsRef.current.value)) {
          throw new Error(INVALID_CLUB_DATA_ORDER_PLAN);
        }
      }
      if (formIsValid) {
        setFormIsValid(true);
      }
    } catch (err) {
      setFormIsValid(false);
      setError(err.message);
    }
  };
  useEffect(() => {
    if (isSubmitted) {
      setShowMessageModal(true);
      setIsLoading(true);
      validateForm();
      if (!formIsValid) {
        setIsLoading(false);
        setIsRejected(true);
      }
    }
  }, [formIsValid, isSubmitted]);

  const submitOrderFormHandler = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitted(true);
      // hideModalHandler();

      // const prices = await getPrices(PRICES_URL, UNSUCCESSFUL_REQUEST);
      // const currentPlan = Object.values(prices)[0].find(
      //   (pricePlan) => pricePlan.name === plan
      // );
      // const users = await getUsers(USERS_URL, UNSUCCESSFUL_REQUEST);
      // const currentUser = Object.entries(users).find(
      //   (array) => array[1].email === user.loggedUserEmail
      // );
      // console.log(currentUser);
      // console.log(currentPlan);
      //   // await updateUserOrderData(
      //   //   USERS_URL,
      //   //   currentUser[0],
      //   //   currentPlan,
      //   //   UNSUCCESSFUL_REQUEST_ORDER_PLAN
      //   // );
    } catch (err) {
      setIsRejected(true);
      setError(err.message);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <Fragment>
      {showMessageModal && isLoading && (
        <MessageModal
          message={LOADING_MSG}
          showMessageModal={showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      {showMessageModal && isRejected && (
        <MessageModal
          message={error}
          showMessageModal={showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      (
      <form onSubmit={submitOrderFormHandler} className={styles["order_modal"]}>
        <div className={styles["order_modal_content"]}>
          <div className={styles["order_modal_component"]}>
            <label className={styles["order_modal_component_label"]}>
              First Name (as per your ID):
            </label>
            <input
              ref={firstNameRef}
              className={styles["order_modal_component_input"]}
              required
              type="text"
              placeholder="First Name..."
            />
          </div>
          <div className={styles["order_modal_component"]}>
            <label className={styles["order_modal_component_label"]}>
              Last Name (as per your ID):
            </label>
            <input
              ref={lastNameRef}
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
            <select
              className={styles["order_modal_component_list"]}
              ref={clubsRef}
            >
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
      )
    </Fragment>
  );
};
export default OrderForm;
