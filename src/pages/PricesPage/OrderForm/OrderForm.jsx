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
  SUCCESSFUL_ORDER_MSG,
} from "../../../util/config";
import CustomButton from "../../../components/Buttons/Button";
import { useReducer, useRef, useEffect, Fragment, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPrices,
  getUsers,
  updateUserOrderData,
} from "../../../util/helpers.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MessageModal from "../../../components/MessageModal/MessageModal";
import { updateLoggedInUser } from "../../../store/active-user-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
const initFormState = {
  startDate: new Date(),
  showMessageModal: false,
  isRejected: false,
  error: "",
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isSubmitted: false,
  formIsValid: false,
  hasActivePlan: false,
};
const formReducer = (state, action) => {
  if (action.type === "SET_DATE") {
    return { ...state, startDate: action.date };
  }
  if (action.type === "RESET_FORM") {
    return initFormState;
  }
  if (action.type === "FORM_IS_VALID") {
    return { ...state, showMessageModal: true, formIsValid: true };
  }
  if (action.type === "FORM_IS_INVALID") {
    return {
      ...state,
      showMessageModal: true,
      isRejected: true,
      error: action.error,
    };
  }
  if (action.type === "SEND_ORDER_FORM") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      successMessage: action.successMessage,
    };
  }
  if (action.type === "UNSUCCESSFUL_REQUEST") {
    return {
      ...state,
      isLoading: false,
      isRejected: true,
      error: action.error,
    };
  }
  if (action.type === "LOADING_REQUEST") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "USER_HAS_ACTIVE_PLAN") {
    return {
      ...state,
      hasActivePlan: true,
      showMessageModal: true,
    };
  }
  if (action.type === "SUBMIT_FORM") {
    return { ...state, isSubmitted: true };
  }
  return initFormState;
};
const OrderForm = ({ plan, hideOrderForm }) => {
  const [formState, dispatchFormAction] = useReducer(
    formReducer,
    initFormState
  );
  const user = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const clubsRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const changeDateHandler = (date) => {
    dispatchFormAction({ type: "SET_DATE", date });
  };
  const hideModalHandler = () => {
    hideOrderForm();
  };
  const hideMessageModalHandler = () => {
    if (formState.isSuccess || formState.hasActivePlan) {
      hideModalHandler();
    }
    if (!formState.isSuccess) {
      dispatchFormAction({ type: "RESET_FORM" });
    }
  };
  const validateForm = () => {
    const isValidFirstName = REGEX_NAME.test(firstNameRef.current.value);
    const isValidLastName = REGEX_NAME.test(lastNameRef.current.value);
    const isValidClub = CLUB_NAMES.some(
      (club) => club === clubsRef.current.value
    );
    const formIsValid = isValidFirstName && isValidLastName && isValidClub;
    try {
      if (!formIsValid) {
        if (!isValidFirstName || !isValidLastName) {
          throw new Error(INVALID_INPUT_DATA_ORDER_PLAN);
        }
        if (!isValidClub) {
          throw new Error(INVALID_CLUB_DATA_ORDER_PLAN);
        }
      }
      if (formIsValid) {
        dispatchFormAction({ type: "FORM_IS_VALID" });
      }
    } catch (err) {
      dispatchFormAction({ type: "FORM_IS_INVALID", error: err.message });
    }
  };
  const sendOrderDataHandler = useCallback(async () => {
    try {
      const prices = await getPrices(PRICES_URL, UNSUCCESSFUL_REQUEST);
      const currentPlan = Object.values(prices)[0].find(
        (pricePlan) => pricePlan.name === plan
      );
      const users = await getUsers(USERS_URL, UNSUCCESSFUL_REQUEST);
      const currentUser = Object.entries(users).find(
        (array) => array[1].email === user.loggedUserEmail
      );
      const date = formState.startDate;
      await updateUserOrderData(
        USERS_URL,
        currentUser[0],
        currentPlan,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          date,
        },
        clubsRef.current.value,
        UNSUCCESSFUL_REQUEST_ORDER_PLAN
      );
      dispatchFormAction({
        type: "SEND_ORDER_FORM",
        successMessage: SUCCESSFUL_ORDER_MSG,
      });
      const email = user.loggedUserEmail;
      dispatch(updateLoggedInUser({ email }));
    } catch (err) {
      dispatchFormAction({ type: "UNSUCCESSFUL_REQUEST", error: err.message });
    }
  }, [dispatch, formState.startDate, plan, user.loggedUserEmail]);
  useEffect(() => {
    if (formState.isLoading) {
      sendOrderDataHandler();
    }
  }, [formState.isLoading, sendOrderDataHandler]);
  useEffect(() => {
    if (formState.formIsValid) {
      dispatchFormAction({ type: "LOADING_REQUEST" });
    }
  }, [formState.formIsValid]);
  useEffect(() => {
    if (formState.isSubmitted) {
      validateForm();
    }
  }, [formState.isSubmitted]);
  const submitOrderFormHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(user.orderData).length > 0) {
      dispatchFormAction({ type: "USER_HAS_ACTIVE_PLAN" });
    }
    if (Object.keys(user.orderData).length === 0) {
      dispatchFormAction({ type: "SUBMIT_FORM" });
    }
  };
  return (
    <Fragment>
      {formState.showMessageModal && formState.isLoading && (
        <MessageModal
          message={LOADING_MSG}
          showMessageModal={formState.showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      {formState.showMessageModal && formState.isRejected && (
        <MessageModal
          message={formState.error}
          showMessageModal={formState.showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      {formState.showMessageModal && formState.isSuccess && (
        <MessageModal
          message={formState.successMessage}
          showMessageModal={formState.showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      {formState.showMessageModal && formState.hasActivePlan && (
        <MessageModal
          message={`You have ordered a plan already. In order to change your current plan you should visit club
         ${Object.values(user.orderData)[0].dataClub}!
       `}
          showMessageModal={formState.showMessageModal}
          hideMessageModal={hideMessageModalHandler}
        />
      )}
      (
      {!formState.isSuccess && !formState.hasActivePlan && (
        <form
          onSubmit={submitOrderFormHandler}
          className={styles["order_modal"]}
        >
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
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="#82b440"
                  style={{ paddingRight: "0.3rem" }}
                />
                Choose starting date:
              </label>
              <DatePicker
                wrapperClassName={styles.datePicker}
                selected={formState.startDate}
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
      )}
      )
    </Fragment>
  );
};
export default OrderForm;
