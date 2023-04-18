import ClientProfileGeneralData from "./ClientProfileGeneralData/ClientProfileGeneralData";
import ClientProfileOrderData from "./ClientProfileOrderData/ClientProfileOrderData";
import styles from "./ProfilePage.module.scss";
import ClientProfileOrderPlanDescription from "./ClientProfileOrderPlanDescription/ClientProfileOrderPlanDescription";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const user = useSelector((state) => state.activeUser);
  return (
    <div className={styles.container}>
      <ClientProfileGeneralData />
      <ClientProfileOrderData />
      {Object.keys(user.orderData).length > 0 && (
        <ClientProfileOrderPlanDescription />
      )}
    </div>
  );
};
export default ProfilePage;
