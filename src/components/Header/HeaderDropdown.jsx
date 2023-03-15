import React from "react";
import styles from "./HeaderDropdown.module.scss";
const HeaderDropdown = (props) => {
  return <div className={styles["dropdown-content"]}>{props.dropdownList}</div>;
};
export default HeaderDropdown;
