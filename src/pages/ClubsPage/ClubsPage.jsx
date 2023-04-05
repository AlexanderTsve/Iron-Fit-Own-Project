import ClubsMap from "./ClubsMap/ClubsMap";
import ClubsHeader from "./ClubsHeader/ClubsHeader";
import ClubsList from "./ClubsList/ClubsList";
import { Fragment } from "react";
const ClubsPage = () => {
  return (
    <Fragment>
      <ClubsHeader />
      <ClubsMap />
      <ClubsList />
    </Fragment>
  );
};
export default ClubsPage;
