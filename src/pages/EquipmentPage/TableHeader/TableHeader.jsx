import styles from "./TableHeader.module.scss";
import { useNavigate } from "react-router-dom";
const TableHeader = ({ list }) => {
  const navigate = useNavigate();
  const navigateToClubInfoHandler = (name) => {
    navigate(`/clubs/${name}`);
  };
  return (
    <thead className={styles["table-header"]}>
      <tr className={styles["table-header-content"]}>
        <th></th>
        {list.map((club, index) => {
          return (
            <th key={index}>
              <span
                className={styles["club-name"]}
                onClick={() => navigateToClubInfoHandler(club.name)}
              >
                {club.name}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeader;
