import React from "react";
import styles from "./HeaderDropdown.module.scss";
import { clubNames } from "../../util/config.js";
const HeaderDropdown = () => {
  const arrOfParagraphEl = clubNames.map((name, index) => (
    <p key={index + 1}>{name}</p>
  ));
  return <div className={styles["dropdown-content"]}>{arrOfParagraphEl}</div>;
};
export default HeaderDropdown;
