import { useParams } from "react-router-dom";
import { Fragment } from "react";
const ClubDetailsPage = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Club Details</h1>
      <p>{params.nameId}</p>
    </Fragment>
  );
};
export default ClubDetailsPage;
