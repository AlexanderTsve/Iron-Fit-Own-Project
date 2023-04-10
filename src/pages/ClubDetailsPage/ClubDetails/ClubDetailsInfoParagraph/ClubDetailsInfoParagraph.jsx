import styles from "./ClubDetailsInfoParagraph.module.scss";
import { useParams } from "react-router-dom";
const ClubDetailsInfoParagraph = ({ type, list, property }) => {
  const params = useParams();
  return (
    <p className={styles["info-para"]}>
      <span>{type}: </span>
      <span>{list.find((club) => club.name === params.nameId)[property]}</span>
    </p>
  );
};
export default ClubDetailsInfoParagraph;
