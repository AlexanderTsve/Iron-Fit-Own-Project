import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
const Header = ({ dropdownList, showLoginModal, showRegistrationModal }) => {
  const [showClubsDropdown, setShowClubsDropdown] = useState(false);
  const [showTimetablesDropdown, setShowTimetablesDropdown] = useState(false);
  const showClubsDropdownHandler = () => {
    setShowClubsDropdown(!showClubsDropdown);
  };
  const hideClubsDropdownHandler = () => {
    setShowClubsDropdown(false);
  };
  const showTimetablesDropdownHandler = () => {
    setShowTimetablesDropdown(!showTimetablesDropdown);
  };
  const hideTimetablesDropdownHandler = () => {
    setShowTimetablesDropdown(false);
  };
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className={styles["header__logo"]} />
        <ul className={styles["nav__list"]}>
          <li
            className={styles["nav__item"]}
            onMouseEnter={showClubsDropdownHandler}
            onMouseLeave={hideClubsDropdownHandler}
          >
            Clubs
            {showClubsDropdown && (
              <HeaderDropdown dropdownList={dropdownList} />
            )}
          </li>
          <li className={styles["nav__item"]}>Prices</li>
          <li className={styles["nav__item"]}>Equipment</li>
          <li
            className={styles["nav__item"]}
            onMouseEnter={showTimetablesDropdownHandler}
            onMouseLeave={hideTimetablesDropdownHandler}
          >
            Timetables
            {showTimetablesDropdown && (
              <HeaderDropdown dropdownList={dropdownList} />
            )}
          </li>
          <li className={styles["nav__item"]}>Experts</li>
          <li className={styles["nav__item"]} onClick={showLoginModal}>
            Login
          </li>
          <li className={styles["nav__item"]}>Logout</li>
          <li className={styles["nav__item"]} onClick={showRegistrationModal}>
            Sign Up
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
