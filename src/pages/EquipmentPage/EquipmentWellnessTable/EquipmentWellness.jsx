import styles from "./EquipmentWellness.module.scss";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import { useEffect } from "react";
import { Fragment } from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableTitle from "../TableTitle/TableTitle";
const EquipmentWellness = () => {
  const clubsObj = useGetClubsRequest();
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
  }, [clubsObj]);
  return (
    <div className={styles.container}>
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <TableTitle>Wellness</TableTitle>
          {clubsObj.clubs.list.length > 0 && (
            <table className={styles["wellness-table"]}>
              <TableHeader list={clubsObj.clubs.list} />
              <tbody>
                <TableRow
                  equipment={clubsObj.clubs.list[0].wellness}
                  list={clubsObj.clubs.list}
                  isEquipmentTable={false}
                />
              </tbody>
            </table>
          )}
        </Fragment>
      )}
    </div>
  );
};
export default EquipmentWellness;
