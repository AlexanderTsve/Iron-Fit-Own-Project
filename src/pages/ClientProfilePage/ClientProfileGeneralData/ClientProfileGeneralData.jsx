import styles from "./ClientProfileGeneralData.module.scss";
import { useSelector } from "react-redux";
const ClientProfileGeneralData = () => {
  const user = useSelector((state) => state.activeUser);
  return (
    <div className={styles["general-info"]}>
      <h1 className={styles["general-info-title"]}>Client Profile</h1>
      <p className={styles["general-info-email"]}>
        Email: {user.loggedUserEmail}
      </p>
      <p className={styles["general-info-phone"]}>
        Tel.: {user.loggedUserPhone}
      </p>
    </div>
  );
};
export default ClientProfileGeneralData;
