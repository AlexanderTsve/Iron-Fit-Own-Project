import ClientProfileGeneralData from "./ClientProfileGeneralData/ClientProfileGeneralData";
import ClientProfileOrderData from "./ClientProfileOrderData/ClientProfileOrderData";
import styles from "./ProfilePage.module.scss";
const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <ClientProfileGeneralData />
      <ClientProfileOrderData />
    </div>
  );
};
export default ProfilePage;
