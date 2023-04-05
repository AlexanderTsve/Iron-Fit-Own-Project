import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Navigation.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/active-user-slice";
import { changeDropdownAction } from "../../store/active-dropdown-slice.js";
import ClubsDropdown from "./ClubsDropdown";
import NavigationLink from "./NavigationLink";
const Navigation = ({
  dropdownList,
  showLoginModal,
  showRegistrationModal,
}) => {
  const [showClubsDropdown, setShowClubsDropdown] = useState(false);
  const [showTimetablesDropdown, setShowTimetablesDropdown] = useState(false);
  const user = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();
  const showClubsDropdownHandler = () => {
    setShowClubsDropdown(!showClubsDropdown);
    dispatch(changeDropdownAction.activateClubsDropdown());
  };
  const hideClubsDropdownHandler = () => {
    setShowClubsDropdown(false);
    dispatch(changeDropdownAction.reset());
  };
  const showTimetablesDropdownHandler = () => {
    setShowTimetablesDropdown(!showTimetablesDropdown);
    dispatch(changeDropdownAction.activateTimetablesDropdown());
  };
  const hideTimetablesDropdownHandler = () => {
    setShowTimetablesDropdown(false);
    dispatch(changeDropdownAction.reset());
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
        <p className={styles["welcome-para"]}>
          Welcome, {user.isLogged ? user.loggedUserEmail : "Guest"}!
        </p>
        <ul className={styles["nav__list"]}>
          <li
            className={styles["nav__item"]}
            onMouseEnter={showClubsDropdownHandler}
            onMouseLeave={hideClubsDropdownHandler}
          >
            <NavigationLink to="/">Clubs</NavigationLink>
            {showClubsDropdown && <ClubsDropdown dropdownList={dropdownList} />}
          </li>
          <li className={styles["nav__item"]}>
            <NavigationLink to="/prices">Prices</NavigationLink>
          </li>
          <li className={styles["nav__item"]}>
            <NavigationLink to="/equipment">Equipment</NavigationLink>
          </li>
          <li
            className={styles["nav__item"]}
            onMouseEnter={showTimetablesDropdownHandler}
            onMouseLeave={hideTimetablesDropdownHandler}
          >
            <NavigationLink to="/timetables">Timetables</NavigationLink>
            {showTimetablesDropdown && (
              <ClubsDropdown dropdownList={dropdownList} />
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
          {user.isLogged && (
            <li className={styles["nav__item"]}>
              <NavigationLink to="/profile">My Profile</NavigationLink>
            </li>
          )}
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
export default Navigation;
