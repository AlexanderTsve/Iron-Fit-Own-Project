import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
const TableRow = ({ equipment, list, isEquipmentTable }) => {
  return Object.keys(equipment).map((equipmentType, index) => {
    return (
      <tr key={index}>
        <td className={styles["table-type"]}>
          {equipmentType
            .split(/(?=[A-Z])/)
            .join(" ")
            .toUpperCase()}
        </td>
        {list.map((club, i) => {
          return (
            <td key={i} className={styles["table-item"]}>
              {isEquipmentTable ? (
                <FontAwesomeIcon
                  icon={
                    club.equipment[equipmentType] ? faThumbsUp : faThumbsDown
                  }
                  color={club.equipment[equipmentType] ? "green" : "red"}
                />
              ) : (
                <FontAwesomeIcon
                  icon={
                    club.wellness[equipmentType] ? faThumbsUp : faThumbsDown
                  }
                  color={club.wellness[equipmentType] ? "green" : "red"}
                />
              )}
            </td>
          );
        })}
      </tr>
    );
  });
};
export default TableRow;
