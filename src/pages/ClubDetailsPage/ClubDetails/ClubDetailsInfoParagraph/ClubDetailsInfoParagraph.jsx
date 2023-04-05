import styles from "./ClubDetailsInfoParagraph.module.scss";
const ClubDetailsInfoParagraph = ({ type, list, nameId, property }) => {
  return (
    <p className={styles["info-para"]}>
      <span>{type}: </span>
      <span>{list.find((club) => club.name === nameId)[property]}</span>
    </p>
  );
};
export default ClubDetailsInfoParagraph;
