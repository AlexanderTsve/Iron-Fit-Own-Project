import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState, useRef } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { getTimetables } from "../../util/helpers.js";
import {
  TIMETABLES_URL,
  UNSUCCESSFUL_REQUEST,
  WORK_HOURS,
  ACTIVITIES,
} from "../../util/config.js";
import styles from "./ClubTimetablePage.module.scss";
const ClubTimetablePage = () => {
  const [timetable, setTimetable] = useState({});
  const [filteredTimetable, setFilteredTimetable] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const params = useParams();
  const activityRef = useRef();
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
      setFilteredTimetable(
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
  const filterByActivityHandler = () => {
    if (activityRef.current.value === "none") {
      setFilteredTimetable(timetable);
    }
    if (activityRef.current.value !== "none") {
      setFilteredTimetable({
        name: params.nameId,
        timetable: timetable.timetable.map((day) => {
          return {
            activities: day.activities.filter(
              (activity) => activity.activity === activityRef.current.value
            ),
            day: day.day,
          };
        }),
      });
    }
  };
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
          <div className={styles["table-activity-dropdown"]}>
            <label className={styles["table-activity-dropdown_label"]}>
              Choose activity:
            </label>
            <select
              ref={activityRef}
              onChange={filterByActivityHandler}
              className={styles["table-activity-dropdown_list"]}
            >
              <option value="none"></option>
              {ACTIVITIES.map((activity, index) => (
                <option value={activity} key={index}>
                  {activity}
                </option>
              ))}
            </select>
          </div>
          <table className={styles["table-content"]}>
            <thead>
              <tr className={styles["table-content-main-row"]}>
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
                  <tr key={index} className={styles["hour-row"]}>
                    <td className={styles["hour-row-start"]}>{hour}</td>
                    {Array.of(
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ).map((day, index) => (
                      <td key={index} className={styles["hour-row-content"]}>
                        {filteredTimetable.timetable
                          .filter((days) => days.day === day)[0]
                          .activities.find((activity) => activity.hour === hour)
                          ?.activity || "-"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ClubTimetablePage;
