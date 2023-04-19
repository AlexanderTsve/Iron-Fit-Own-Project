import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { getTimetables } from "../../util/helpers.js";
import {
  TIMETABLES_URL,
  UNSUCCESSFUL_REQUEST,
  WORK_HOURS,
} from "../../util/config.js";
import styles from "./ClubTimetablePage.module.scss";
const ClubTimetablePage = () => {
  const [timetable, setTimetable] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const params = useParams();
  const getTimetableRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const timetablesObj = await getTimetables(
        TIMETABLES_URL,
        UNSUCCESSFUL_REQUEST
      );
      setTimetable(
        Object.values(timetablesObj)[0].filter(
          (timetable) => timetable.name === params.nameId
        )[0]
      );
    } catch (error) {
      setIsRejected(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [params.nameId]);
  useEffect(() => {
    if (
      (Object.keys(timetable).length === 0 && !isRejected) ||
      (params.nameId !== timetable.name && !isRejected)
    ) {
      getTimetableRequest();
    }
  }, [getTimetableRequest, isRejected, params.nameId, timetable]);
  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.spinner} />}
      {isRejected && <ErrorMessage errorMsg={error} />}
      {!isLoading && !isRejected && Object.keys(timetable).length > 0 && (
        <div className={styles.table}>
          <h1 className={styles["table-title"]}>{timetable.name} Timetable</h1>
          <table className={styles["table-content"]}>
            <thead>
              <tr>
                <th className={styles.describe}>
                  <span className={styles["describe-item-hour"]}>hour</span>
                  <span className={styles["diagonal-cross"]} />
                  <span className={styles["describe-item-day"]}>day</span>
                </th>
                {timetable.timetable.map((day, index) => {
                  return (
                    <th key={index} className={styles.weekday}>
                      {day.day}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {WORK_HOURS.map((hour, index) => {
                return (
                  <tr key={index}>
                    <td>{hour}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>{WORK_HOURS[0]}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ClubTimetablePage;
