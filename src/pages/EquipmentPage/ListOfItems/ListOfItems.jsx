import styles from "./ListOfItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
const ListOfItems = ({ listOfClubs, isEquipmentList, filtered }) => {
  return listOfClubs.map((club, index) => (
    <div key={index} className={styles["list-content"]}>
      <h3 className={styles["list-content-title"]}>{club.name}</h3>
      {Object.keys(filtered).map((equipmentType, index) => (
        <div key={index} className={styles["list-content-item"]}>
          <span className={styles["list-content-item-title"]}>
            {equipmentType
              .split(/(?=[A-Z])/)
              .join(" ")
              .toUpperCase()}
          </span>
          <span>
            {isEquipmentList ? (
              <FontAwesomeIcon
                icon={club.equipment[equipmentType] ? faThumbsUp : faThumbsDown}
                color={club.equipment[equipmentType] ? "green" : "red"}
              />
            ) : (
              <FontAwesomeIcon
                icon={club.wellness[equipmentType] ? faThumbsUp : faThumbsDown}
                color={club.wellness[equipmentType] ? "green" : "red"}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  ));
};
export default ListOfItems;
