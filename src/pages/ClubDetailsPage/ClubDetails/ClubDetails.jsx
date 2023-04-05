import styles from "./ClubDetails.module.scss";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
import { useEffect } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import ClubDetailsInfoParagraph from "./ClubDetailsInfoParagraph/ClubDetailsInfoParagraph";
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
                  nameId={params.nameId}
                  property="address"
                />
                <ClubDetailsInfoParagraph
                  type="Tel"
                  list={clubsObj.clubs.list}
                  nameId={params.nameId}
                  property="phone"
                />
                <ClubDetailsInfoParagraph
                  type="Work days"
                  list={clubsObj.clubs.list}
                  nameId={params.nameId}
                  property="workDaysStr"
                />
                <ClubDetailsInfoParagraph
                  type="Opening hours"
                  list={clubsObj.clubs.list}
                  nameId={params.nameId}
                  property="workingHours"
                />
              </div>
            </div>
            <div className={styles["details-useful"]}>
              <p className={styles["details-useful-name"]}>
                Useful Information
              </p>
              <div className={styles["details-useful-info"]}>
                <p className={styles["details-useful-info-size"]}>
                  <span>Size: </span>
                  <span>
                    {clubsObj.clubs.list
                      .find((club) => club.name === params.nameId)
                      .info.area.replace(/\D/g, "")}
                    m<sup>2</sup>
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
export default ClubDetails;
