import styles from "./ClientProfileOrderData.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClientProfileOrderDetail from "./ClientProfileOrderDetail/ClientProfileOrderDetail";
const ClientProfileOrderData = () => {
  const user = useSelector((state) => state.activeUser);
  const navigate = useNavigate();
  const navigateToPricesPageHandler = () => {
    navigate("/prices");
  };
  return (
    <div className={styles["order-data-container"]}>
      <h1 className={styles["order-data-title"]}>Order Information</h1>
      {Object.keys(user.orderData).length === 0 && (
        <p className={styles["order-data-container-no-plan"]}>
          No current active order! Go to&nbsp;
          <span
            onClick={navigateToPricesPageHandler}
            className={styles["order-data-container-no-plan-link"]}
          >
            Prices page
          </span>
          &nbsp; in order to order one!
        </p>
      )}
      {Object.keys(user.orderData).length > 0 && (
        <div className={styles["order-data-container-info"]}>
          <ClientProfileOrderDetail
            title="Club to visit to receive the ordered card"
            data={Object.values(user.orderData)[0].dataClub}
          />
          <ClientProfileOrderDetail
            title="Subscription plan starts at (YYYY-MM-DD)"
            data={Object.values(user.orderData)[0].dataUser.date.slice(0, 10)}
          />
          <ClientProfileOrderDetail
            title="First Name as per order info"
            data={Object.values(user.orderData)[0].dataUser.firstName}
          />
          <ClientProfileOrderDetail
            title="Last Name as per order info"
            data={Object.values(user.orderData)[0].dataUser.lastName}
          />
          <ClientProfileOrderDetail
            title="Chosen Plan"
            data={Object.values(user.orderData)[0].dataPlan.name}
          />
          <ClientProfileOrderDetail
            title="Term"
            data={Object.values(user.orderData)[0].dataPlan.term}
          />
        </div>
      )}
    </div>
  );
};
export default ClientProfileOrderData;
