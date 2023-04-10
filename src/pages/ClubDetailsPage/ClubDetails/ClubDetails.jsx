import styles from "./ClubDetails.module.scss";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import { useEffect } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import ClubDetailsInfoParagraph from "./ClubDetailsInfoParagraph/ClubDetailsInfoParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareParking,
  faLock,
  faWheelchair,
  faWifi,
  faBottleWater,
} from "@fortawesome/free-solid-svg-icons";
import ClubUsefulInfoItem from "./ClubUsefulInfoItem/ClubUsefulInfoItem";
const ClubDetails = () => {
  const clubsObj = useGetClubsRequest();
  const params = useParams();
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
    if (clubsObj.clubs.list.length === 0) {
      clubsObj.getClubs();
    }
  }, [clubsObj]);
  return (
    <div className={styles.container}>
      {clubsObj.clubs.isLoading && <div className={styles.spinner} />}
      {clubsObj.clubs.isRejected && (
        <ErrorMessage errorMsg={clubsObj.clubs.errorMsg} />
      )}
      {!clubsObj.clubs.isRejected &&
        !clubsObj.clubs.isLoading &&
        clubsObj.clubs.list.length > 0 && (
          <div className={styles.details}>
            <p className={styles["details-name"]}>{params.nameId}</p>
            <div className={styles["details-important"]}>
              <img
                className={styles["details-important-image"]}
                src={require(`../../../assets/images/clubs/${params.nameId}.png`)}
                alt={params.nameId}
              />
              <div>
                <ClubDetailsInfoParagraph
                  type="Address"
                  list={clubsObj.clubs.list}
                  property="address"
                />
                <ClubDetailsInfoParagraph
                  type="Tel"
                  list={clubsObj.clubs.list}
                  property="phone"
                />
                <ClubDetailsInfoParagraph
                  type="Work days"
                  list={clubsObj.clubs.list}
                  property="workDaysStr"
                />
                <ClubDetailsInfoParagraph
                  type="Opening hours"
                  list={clubsObj.clubs.list}
                  property="workingHours"
                />
              </div>
            </div>
            <div className={styles["details-useful"]}>
              <p className={styles["details-useful-name"]}>
                Useful Information
              </p>
              <div className={styles["details-useful-info"]}>
                <ul>
                  <ClubUsefulInfoItem
                    type="Size"
                    list={clubsObj.clubs.list}
                    property="area"
                    dataType="string"
                  />
                  <ClubUsefulInfoItem
                    icon={<FontAwesomeIcon icon={faSquareParking} />}
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="parking"
                  />
                  <ClubUsefulInfoItem
                    type="Body analysis"
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="bodyAnalysis"
                  />

                  <ClubUsefulInfoItem
                    icon={<FontAwesomeIcon icon={faLock} />}
                    type="Lockers"
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="lockers"
                  />
                  <ClubUsefulInfoItem
                    icon={<FontAwesomeIcon icon={faWheelchair} />}
                    type="Wheelchair Access"
                    dataType="boolean"
                    list={clubsObj.clubs.list}
                    property="wheelchairAccess"
                  />
                  <ClubUsefulInfoItem
                    type="Protein Drink"
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="proteinDrink"
                  />
                  <ClubUsefulInfoItem
                    type="Towel"
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="towel"
                  />
                  <ClubUsefulInfoItem
                    icon={<FontAwesomeIcon icon={faWifi} />}
                    type="Wifi"
                    dataType="boolean"
                    list={clubsObj.clubs.list}
                    property="wifi"
                  />
                  <ClubUsefulInfoItem
                    icon={<FontAwesomeIcon icon={faBottleWater} />}
                    type="Water"
                    dataType="string"
                    list={clubsObj.clubs.list}
                    property="water"
                  />
                </ul>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
export default ClubDetails;
