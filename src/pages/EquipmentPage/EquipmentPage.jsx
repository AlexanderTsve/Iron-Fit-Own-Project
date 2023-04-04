import EquipmentFitness from "./EquipmentFitnessTable/EquipmentFitness";
import EquipmentWellness from "./EquipmentWellnessTable/EquipmentWellness";
import { Fragment } from "react";
const EquipmentPage = () => {
  return (
    <Fragment>
      <EquipmentFitness /> <EquipmentWellness />
    </Fragment>
  );
};
export default EquipmentPage;
