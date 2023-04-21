import styles from "./TimetablesPage.module.scss";
import { CLUB_NAMES } from "../../util/config";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const TimetablesPage = () => {
  const navigate = useNavigate();
  const navigateToCurrentTimetableHandler = (e) => {
    console.log(e.target.value);
    navigate(`/timetables/${e.target.value}`);
  };
  return (
    <Fragment>
      <div className={styles["container-dropdown"]}>
        <h1 className={styles["container-dropdown-title"]}>Group Classes</h1>
        <label className={styles["container-dropdown_label"]}>
          Go to timetable:
        </label>
        <select
          onChange={navigateToCurrentTimetableHandler}
          className={styles["container-dropdown_list"]}
        >
          <option value="none">--choose a club--</option>
          {CLUB_NAMES.map((club, index) => (
            <option value={club} key={index}>
              {club}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.container}>
        <p className={styles["container-para"]}>
          If you don’t know what exercise to start with or if you don’t want to
          exercise alone, we’re here for you. We offer group exercises in all
          clubs under the guidance of professional instructors who’ll help
          motivate you and with the technique. It’s enough to come to the lesson
          in a good mood, we’ll take care of everything else.
        </p>
      </div>
    </Fragment>
  );
};
export default TimetablesPage;
