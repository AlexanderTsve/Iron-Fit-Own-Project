import styles from "./ClubCard.module.scss";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ClubCard = ({ info }) => {
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
  return (
    <div className={styles.card}>
      <h3>{info.name.toUpperCase()}</h3>
      <p>{info.address}</p>
      <p>{info.phone}</p>
      <p>Mon-Sat, {info.workingHours}</p>
      <p>
        <FontAwesomeIcon
          icon={clubStatus ? faDoorOpen : faDoorClosed}
          color={clubStatus ? "green" : "red"}
        />
      </p>
      <button>Timetables</button>
      <button>Details</button>
    </div>
  );
};
export default ClubCard;
