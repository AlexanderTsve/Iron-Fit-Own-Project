import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/active-user-slice";
import HeaderDropdown from "./HeaderDropdown";
const Header = ({ dropdownList, showLoginModal, showRegistrationModal }) => {
  const [showClubsDropdown, setShowClubsDropdown] = useState(false);
  const [showTimetablesDropdown, setShowTimetablesDropdown] = useState(false);
  const user = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();
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
  const logoutHandler = () => {
    dispatch(actions.reset());
  };
  useEffect(() => {
    if (!user.isLogged && localStorage.getItem("rememberedIronFitUser")) {
      localStorage.removeItem("rememberedIronFitUser");
    }
  }, [user.isLogged]);
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
          {!user.isLogged && (
            <li className={styles["nav__item"]} onClick={showLoginModal}>
              Login
            </li>
          )}
          {user.isLogged && (
            <li className={styles["nav__item"]} onClick={logoutHandler}>
              Logout
            </li>
          )}
          {user.isLogged && <li className={styles["nav__item"]}>My Profile</li>}
          {!user.isLogged && (
            <li className={styles["nav__item"]} onClick={showRegistrationModal}>
              Sign Up
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
