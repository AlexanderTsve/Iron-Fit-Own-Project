import React from "react";
import styles from "./HeaderDropdown.module.scss";
const HeaderDropdown = ({ dropdownList }) => {
  return <div className={styles["dropdown-content"]}>{dropdownList}</div>;
};
export default HeaderDropdown;
