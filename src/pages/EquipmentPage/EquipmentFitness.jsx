import styles from "./EquipmentFitness.module.scss";
import { useEffect } from "react";
import EquipmentFitnessTable from "./EquipmentFitnessTable";
import { Fragment } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetClubsRequest from "../../hooks/use-get-clubs-request";
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
    <div>
      {clubsObj.clubs.isLoading && <div className={styles.spinner} />}
      {clubsObj.clubs.isRejected && (
        <div className={styles.error}>
          <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
          <h1 className={styles.rejected}>{clubsObj.clubs.errorMsg}</h1>
        </div>
      )}
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <h1>Fitness</h1>
          <div className={styles.list}>
            {clubsObj.clubs.list.length > 0 &&
              clubsObj.clubs.list.map((club, index) => {
                return (
                  <EquipmentFitnessTable
                    key={index}
                    info={{
                      equipment: club.equipment,
                      name: club.name,
                    }}
                  />
                );
              })}
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default EquipmentFitness;
