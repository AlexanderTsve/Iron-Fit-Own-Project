import React from "react";
import styles from "./ClubsDropdown.module.scss";
const ClubsDropdown = ({ dropdownList }) => {
  return <div className={styles["dropdown-content"]}>{dropdownList}</div>;
};
export default ClubsDropdown;
