import styles from "./ClubEquipment.module.scss";
import ClubFitnessEquipmentAccordion from "./ClubFitnessEquipmentAccordion/ClubFitnessEquipmentAccordion";
import ClubWellnessAccordion from "./ClubWellnessAccordion/ClubWellnessAccordion";
const ClubEquipment = () => {
  return (
    <div className={styles["accordion-container"]}>
      <ClubFitnessEquipmentAccordion />
      <ClubWellnessAccordion />
    </div>
  );
};
export default ClubEquipment;
