import styles from "./TableTitle.module.scss";
const TableTitle = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};
export default TableTitle;
