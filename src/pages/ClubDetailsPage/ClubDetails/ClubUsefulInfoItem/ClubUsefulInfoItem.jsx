import styles from "./ClubUsefulInfoItem.module.scss";
import { useParams } from "react-router-dom";
const ClubUsefulInfoItem = ({ icon, type, dataType, list, property }) => {
  const params = useParams();
  return (
    <li className={styles["useful-item"]}>
      {icon}&nbsp;
      {type}:&nbsp;
      {dataType === "boolean"
        ? list.find((club) => club.name === params.nameId).info[property]
          ? "yes"
          : "no"
        : list.find((club) => club.name === params.nameId).info[property]}
    </li>
  );
};
export default ClubUsefulInfoItem;
