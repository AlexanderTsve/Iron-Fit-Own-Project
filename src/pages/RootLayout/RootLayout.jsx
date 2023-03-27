import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "../../components/Header/Navigation";
import LoginModal from "../../components/LoginModal/LoginModal";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import { clubNames } from "../../util/config.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  submitAuthenticationRegFormHandler,
  submitRegistrationFormDataHandler,
} from "../../util/helpers.js";
const RootLayout = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegistrationModalVisible, setIsRegistrationModalVisible] =
    useState(false);
  const subDirectory = useSelector((state) => state.activeDropdown);
  const navigate = useNavigate();
  const showLoginModalHandler = () => {
    setIsLoginModalVisible(true);
  };
  const hideLoginModalHandler = () => {
    setIsLoginModalVisible(false);
  };
  const showRegistrationModalHandler = () => {
    setIsRegistrationModalVisible(true);
  };
  const hideRegistrationModalHandler = () => {
    setIsRegistrationModalVisible(false);
  };
  const navigateToClubHandler = (name) => {
    navigate(`${subDirectory.activeDropdown}/${name}`);
  };
  const clubsDropdownList = clubNames.map((name, index) => (
    <p key={index + 1} onClick={() => navigateToClubHandler(name)}>
      {name}
    </p>
  ));
  return (
    <Fragment>
      <Navigation
        dropdownList={clubsDropdownList}
        showLoginModal={showLoginModalHandler}
        showRegistrationModal={showRegistrationModalHandler}
      />
      {isLoginModalVisible && (
        <LoginModal
          showModal={isLoginModalVisible}
          hideModal={hideLoginModalHandler}
          showRegistrationModal={showRegistrationModalHandler}
        />
      )}
      {isRegistrationModalVisible && (
        <RegistrationModal
          showModal={isRegistrationModalVisible}
          hideModal={hideRegistrationModalHandler}
          showLoginModal={showLoginModalHandler}
          authenticateSignUpUser={submitAuthenticationRegFormHandler}
          submitRegistrationForm={submitRegistrationFormDataHandler}
        />
      )}
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootLayout;
