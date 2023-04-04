import styles from "./EquipmentWellness.module.scss";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import { useEffect } from "react";
import { Fragment } from "react";
import TableTitle from "../../../components/TableTitle/TableTitle";
import Table from "react-bootstrap/Table";
import TableHeader from "../../../components/TableHeader/TableHeader";
import TableRow from "../../../components/TableRow/TableRow";
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
            <Table bordered hover className="w-75">
              <TableHeader list={clubsObj.clubs.list} />
              <tbody>
                <TableRow
                  equipment={clubsObj.clubs.list[0].wellness}
                  list={clubsObj.clubs.list}
                  isEquipmentTable={false}
                />
              </tbody>
            </Table>
          )}
        </Fragment>
      )}
    </div>
  );
};
export default EquipmentWellness;
