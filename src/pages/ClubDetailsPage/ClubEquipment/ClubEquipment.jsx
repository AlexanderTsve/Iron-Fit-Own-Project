import styles from "./ClubEquipment.module.scss";
import ClubFitnessEquipmentAccordion from "./ClubFitnessEquipmentAccordion/ClubFitnessEquipmentAccordion";
import ClubWellnessAccordion from "./ClubWellnessAccordion/ClubWellnessAccordion";
import { useSelector } from "react-redux";
const ClubEquipment = () => {
  const clubsList = useSelector((state) => state.clubsList);
  return (
    !clubsList.isLoading &&
    !clubsList.isRejected && (
      <div className={styles["accordion-container"]}>
        <ClubFitnessEquipmentAccordion />
        <ClubWellnessAccordion />
      </div>
    )
  );
};
export default ClubEquipment;
