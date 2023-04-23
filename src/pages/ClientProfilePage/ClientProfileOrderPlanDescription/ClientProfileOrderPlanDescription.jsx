import { useSelector } from "react-redux";
import styles from "./ClientProfileOrderPlanDescription.module.scss";
import ClientProfileOrderPlanList from "./ClientProfileOrderPlanList/ClientProfileOrderPlanList";
const ClientProfileOrderPlanDescription = () => {
  const user = useSelector((state) => state.activeUser);
  return (
    <div className={styles.container}>
      <ClientProfileOrderPlanList title="You get" property="characteristics" />
      {Object.values(user.orderData)[0].dataPlan.bonuses &&
        Object.values(user.orderData)[0].dataPlan.bonuses.length > 0 && (
          <ClientProfileOrderPlanList title="Bonuses" property="bonuses" />
        )}
    </div>
  );
};
export default ClientProfileOrderPlanDescription;
