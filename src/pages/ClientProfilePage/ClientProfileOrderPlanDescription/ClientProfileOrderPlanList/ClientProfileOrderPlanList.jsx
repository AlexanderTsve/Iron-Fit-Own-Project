import styles from "./ClientProfileOrderPlanList.module.scss";
import { useSelector } from "react-redux";
const ClientProfileOrderPlanList = ({ title, property }) => {
  const user = useSelector((state) => state.activeUser);
  return (
    <div className={styles.characteristics}>
      <h1 className={styles["characteristics-title"]}>{title}:&nbsp;</h1>
      <div className={styles["characteristics-container"]}>
        <ul className={styles["characteristics-container-list"]}>
          {Object.values(user.orderData)[0].dataPlan[property].map(
            (characteristic, index) => {
              return (
                <li
                  className={styles["characteristics-container-list-item"]}
                  key={index}
                >
                  {characteristic}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default ClientProfileOrderPlanList;
