import styles from "./EquipmentFitness.module.scss";
import { useEffect } from "react";
import { Fragment } from "react";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import TableTitle from "../../../components/TableTitle/TableTitle";
import TableHeader from "../../../components/TableHeader/TableHeader";
import TableRow from "../../../components/TableRow/TableRow";
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
        <ErrorMessage errorMsg={clubsObj.clubs.errorMsg} />
      )}
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <TableTitle>Fitness</TableTitle>
          {clubsObj.clubs.list.length > 0 && (
            <table className={styles["fitness-table"]}>
              <TableHeader list={clubsObj.clubs.list} />
              <tbody>
                <TableRow
                  equipment={clubsObj.clubs.list[0].equipment}
                  list={clubsObj.clubs.list}
                  isEquipmentTable={true}
                />
              </tbody>
            </table>
          )}
        </Fragment>
      )}
    </div>
  );
};
export default EquipmentFitness;
