import styles from "./ClubCard.module.scss";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
const ClubCard = ({ info }) => {
  const navigate = useNavigate();
  const workDays = info.workDays;
  const startWorkingHour = Number(info.workingHours.split(".")[0]);
  const startWorkingMinutes = Number(
    info.workingHours.split(".")[1].split("-")[0]
  );
  const endWorkingHour = Number(
    info.workingHours.split(".")[1].split("-")[1].trim()
  );
  const endWorkingMinutes = Number(info.workingHours.split(".")[2]);
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const calcIsEarlyMinutes =
    currentHour === startWorkingHour
      ? currentMinutes >= startWorkingMinutes
        ? true
        : false
      : true;
  const calcIsDelayMinutes =
    currentHour === endWorkingHour
      ? currentMinutes <= endWorkingMinutes
        ? true
        : false
      : true;
  const clubStatus =
    workDays.some((day) => day === currentDay) &&
    currentHour >= startWorkingHour &&
    currentHour <= endWorkingHour &&
    calcIsEarlyMinutes &&
    calcIsDelayMinutes;
  const navigateToClubDetailsPageHandler = () => {
    navigate(`/clubs/${info.name}`);
  };
  const navigateToClubTimetablePageHandler = () => {
    navigate(`/timetables/${info.name}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <h3>{info.name.toUpperCase()}</h3>
        <p>
          <FontAwesomeIcon
            icon={clubStatus ? faDoorOpen : faDoorClosed}
            color={clubStatus ? "green" : "red"}
          />
        </p>
        <span className={styles["card-header-work-time"]}>
          Mon-Sat, {info.workingHours}
        </span>
      </div>
      <div className={styles["card-info"]}>
        <span className={styles["card-info-details"]}>
          Address: {info.address}
        </span>
        <span className={styles["card-info-details"]}>Tel.: {info.phone}</span>
      </div>
      <div className={styles["card-btns"]}>
        <Button onClick={navigateToClubTimetablePageHandler}>Timetable</Button>
        <Button onClick={navigateToClubDetailsPageHandler}>More Info</Button>
      </div>
    </div>
  );
};
export default ClubCard;
