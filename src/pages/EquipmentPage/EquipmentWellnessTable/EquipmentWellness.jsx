import styles from "./EquipmentWellness.module.scss";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import { useEffect, useRef, useState, Fragment } from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableTitle from "../TableTitle/TableTitle";
import DropdownFilter from "../../../components/DropdownFilter/DropdownFilter";
import { WELLNESS, SPLIT_REGEX_UPPERCASE } from "../../../util/config";
const EquipmentWellness = () => {
  const clubsObj = useGetClubsRequest();
  const wellnessRef = useRef();
  const [filteredWellness, setFilteredWellness] = useState({});
  useEffect(() => {
    if (
      wellnessRef.current.value === "none" &&
      clubsObj.clubs.list.length > 0
    ) {
      setFilteredWellness(clubsObj.clubs.list[0].wellness);
    }
  }, [clubsObj.clubs.list]);
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
  }, [clubsObj]);
  const filterByWellnessTypeHandler = () => {
    if (wellnessRef.current.value === "none") {
      setFilteredWellness(clubsObj.clubs.list[0].wellness);
    }
    if (wellnessRef.current.value !== "none") {
      setFilteredWellness(
        clubsObj.clubs.list.map((club) =>
          Object.fromEntries(
            Object.entries(club.wellness).filter(
              (wellness) =>
                wellness[0]
                  .split(SPLIT_REGEX_UPPERCASE)
                  .join(" ")
                  .toUpperCase() === wellnessRef.current.value
            )
          )
        )[0]
      );
    }
  };
  return (
    <div className={styles.container}>
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <TableTitle>Wellness</TableTitle>
          <DropdownFilter
            reference={wellnessRef}
            options={WELLNESS}
            label="Filter wellness activity:"
            onChange={filterByWellnessTypeHandler}
          />
          {clubsObj.clubs.list.length > 0 && (
            <table className={styles["wellness-table"]}>
              <TableHeader list={clubsObj.clubs.list} />
              <tbody>
                <TableRow
                  equipment={filteredWellness}
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
