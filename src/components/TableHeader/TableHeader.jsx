import styles from "./TableHeader.module.scss";
const TableHeader = ({ list }) => {
  return (
    <thead>
      <tr className={styles["table-header"]}>
        <th></th>
        {list.map((club, index) => {
          return <th key={index}>{club.name}</th>;
        })}
      </tr>
    </thead>
  );
};
export default TableHeader;
