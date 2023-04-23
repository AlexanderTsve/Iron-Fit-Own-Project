import styles from "./Accordion.module.scss";
import { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { REGEX_UPPERCASE, SPLIT_REGEX_UPPERCASE } from "../../util/config";
const Accordion = ({ type, property }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const clubsList = useSelector((state) => state.clubsList);
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    setToggleAccordion(false);
  }, [location]);
  const toggleAccordionHandler = () => {
    toggleAccordion ? setToggleAccordion(false) : setToggleAccordion(true);
  };
  return (
    <Fragment>
      <button
        onClick={toggleAccordionHandler}
        className={
          toggleAccordion
            ? `${styles.accordion} ${styles.active}`
            : styles.accordion
        }
      >
        {type}
      </button>
      {toggleAccordion && (
        <div className={styles.panel}>
          <ul className={styles["panel-list"]}>
            {Object.entries(
              clubsList.list.find((club) => club.name === params.nameId)[
                property
              ]
            )
              .filter((entry) => entry[1] === true)
              .map((entry, index) => {
                return (
                  <li key={index} className={styles["panel-list-item"]}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className={styles["panel-list-item-text"]}>
                      {REGEX_UPPERCASE.test(entry[0])
                        ? entry[0]
                            .split(SPLIT_REGEX_UPPERCASE)
                            .join(" ")
                            .toUpperCase()
                        : entry[0].toUpperCase()}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};
export default Accordion;
