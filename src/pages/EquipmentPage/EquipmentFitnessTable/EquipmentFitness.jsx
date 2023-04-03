import styles from "./EquipmentFitness.module.scss";
import { useEffect } from "react";
import { Fragment } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import Table from "react-bootstrap/Table";
const EquipmentFitness = () => {
  const clubsObj = useGetClubsRequest();
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
    if (clubsObj.clubs.list.length === 0) {
      clubsObj.getClubs();
    }
  }, [clubsObj]);
  return (
    <div className={styles.container}>
      {clubsObj.clubs.isLoading && <div className={styles.spinner} />}
      {clubsObj.clubs.isRejected && (
        <div className={styles.error}>
          <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
          <h1 className={styles.rejected}>{clubsObj.clubs.errorMsg}</h1>
        </div>
      )}
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <h1 className={styles.header}>Fitness</h1>
          {clubsObj.clubs.list.length > 0 && (
            <Table bordered hover className="w-75">
              <thead>
                <tr className={styles["fitness-table-header"]}>
                  <th></th>
                  {clubsObj.clubs.list.map((club, index) => {
                    return <th key={index}>{club.name}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {Object.keys(clubsObj.clubs.list[0].equipment).map(
                  (equipmentType, index) => {
                    return (
                      <tr key={index}>
                        <td className={styles["fitness-table-type"]}>
                          {equipmentType
                            .split(/(?=[A-Z])/)
                            .join(" ")
                            .toUpperCase()}
                        </td>
                        {clubsObj.clubs.list.map((club, i) => {
                          return (
                            <td
                              key={i}
                              className={styles["fitness-table-item"]}
                            >
                              <FontAwesomeIcon
                                icon={
                                  club.equipment[equipmentType]
                                    ? faThumbsUp
                                    : faThumbsDown
                                }
                                color={
                                  club.equipment[equipmentType]
                                    ? "green"
                                    : "red"
                                }
                              />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          )}
        </Fragment>
      )}
    </div>
  );
};
export default EquipmentFitness;
