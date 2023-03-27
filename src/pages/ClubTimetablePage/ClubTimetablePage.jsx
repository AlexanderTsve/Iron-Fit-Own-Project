import { useParams } from "react-router-dom";
import { Fragment } from "react";
const ClubTimetablePage = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Club Timetable Details</h1>
      <p>{params.nameId}</p>
    </Fragment>
  );
};
export default ClubTimetablePage;
