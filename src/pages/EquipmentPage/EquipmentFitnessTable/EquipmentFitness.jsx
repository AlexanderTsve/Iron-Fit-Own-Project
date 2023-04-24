import styles from "./EquipmentFitness.module.scss";
import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableTitle from "../TableTitle/TableTitle";
import DropdownFilter from "../../../components/DropdownFilter/DropdownFilter";
import { EQUIPMENT, SPLIT_REGEX_UPPERCASE } from "../../../util/config";
const EquipmentFitness = () => {
  const clubsObj = useGetClubsRequest();
  const equipmentRef = useRef("none");
  const [filteredTools, setFilteredTools] = useState({});
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
    if (clubsObj.clubs.list.length === 0) {
      clubsObj.getClubs();
    }
  }, [clubsObj]);
  useEffect(() => {
    if (
      equipmentRef.current.value === "none" &&
      clubsObj.clubs.list.length > 0
    ) {
      setFilteredTools(clubsObj.clubs.list[0].equipment);
    }
  }, [clubsObj.clubs.list]);
  const filterByEquipmentTypeHandler = () => {
    if (equipmentRef.current.value === "none") {
      setFilteredTools(clubsObj.clubs.list[0].equipment);
    }
    if (equipmentRef.current.value !== "none") {
      setFilteredTools(
        clubsObj.clubs.list.map((club) =>
          Object.fromEntries(
            Object.entries(club.equipment).filter(
              (equipmentTool) =>
                equipmentTool[0]
                  .split(SPLIT_REGEX_UPPERCASE)
                  .join(" ")
                  .toUpperCase() === equipmentRef.current.value
            )
          )
        )[0]
      );
    }
  };
  return (
    <div className={styles.container}>
      {clubsObj.clubs.isLoading && <div className={styles.spinner} />}
      {clubsObj.clubs.isRejected && (
        <ErrorMessage errorMsg={clubsObj.clubs.errorMsg} />
      )}
      {!clubsObj.clubs.isRejected && (
        <Fragment>
          <TableTitle>Fitness</TableTitle>
          <DropdownFilter
            label="Filter equipment tool:"
            options={EQUIPMENT}
            onChange={filterByEquipmentTypeHandler}
            reference={equipmentRef}
          />
          {clubsObj.clubs.list.length > 0 && (
            <table className={styles["fitness-table"]}>
              <TableHeader list={clubsObj.clubs.list} />
              <tbody>
                <TableRow
                  equipment={filteredTools}
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
