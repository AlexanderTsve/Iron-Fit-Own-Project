import { Fragment } from "react";
import ClubDetails from "./ClubDetails/ClubDetails";
import ClubEquipment from "./ClubEquipment/ClubEquipment";
const ClubDetailsPage = () => {
  return (
    <Fragment>
      <ClubDetails />
      <ClubEquipment />
    </Fragment>
  );
};
export default ClubDetailsPage;
