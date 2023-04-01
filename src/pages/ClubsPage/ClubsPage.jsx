import ClubsMap from "./ClubsMap";
import ClubsHeader from "./ClubsHeader";
import ClubsList from "./ClubsList";
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
