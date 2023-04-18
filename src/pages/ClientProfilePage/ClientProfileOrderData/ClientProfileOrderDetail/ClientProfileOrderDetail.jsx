import styles from "./ClientProfileOrderDetail.module.scss";
const ClientProfileOrderDetail = ({ title, data }) => {
  return (
    <p className={styles.info}>
      <span className={styles["info-title"]}>{title}:&nbsp;</span>
      <span className={styles["info-describe"]}>{data}</span>
    </p>
  );
};
export default ClientProfileOrderDetail;
