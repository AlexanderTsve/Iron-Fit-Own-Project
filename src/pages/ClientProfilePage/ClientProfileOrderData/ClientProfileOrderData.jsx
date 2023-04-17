import styles from "./ClientProfileOrderData.module.scss";
import { useSelector } from "react-redux";
const ClientProfileOrderData = () => {
  const user = useSelector((state) => state.activeUser);
  return (
    <div className={styles["order-data-container"]}>
      <h1 className={styles["order-data-title"]}>Order Information</h1>
      {Object.keys(user.orderData).length === 0 && (
        <p>No current active order!</p>
      )}
    </div>
  );
};
export default ClientProfileOrderData;
