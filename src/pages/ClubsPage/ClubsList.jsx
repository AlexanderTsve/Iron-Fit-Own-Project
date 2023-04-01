import styles from "./ClubsList.module.scss";
import ClubCard from "./ClubCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ClubsList = () => {
  const clubs = useSelector((state) => state.clubsList.list);
  const [clubsList, setClubsList] = useState([]);
  useEffect(() => {
    if (clubs.length > 0) {
      setClubsList(clubs);
    }
  }, [clubs]);
  return (
    <div className={styles.list}>
      {clubsList.length > 0 &&
        clubsList.map((club, index) => {
          return (
            <ClubCard
              key={index}
              info={{
                address: club.address,
                name: club.name,
                phone: club.phone,
                workDays: club.workDays,
                workingHours: club.workingHours,
              }}
            />
          );
        })}
    </div>
  );
};
export default ClubsList;
