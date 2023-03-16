import "./App.css";
import Header from "./components/Header/Header";
import LoginModal from "./components/LoginModal/LoginModal";
import RegistrationModal from "./components/RegistrationModal/RegistrationModal";
import { clubNames } from "./util/config.js";
import { useState } from "react";
// import SendOriginalDataClubsComponent from "./assets/originalData/ordiginalData";
function App() {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegistrationModalVisible, setIsRegistrationModalVisible] =
    useState(false);
  const clubsDropdownList = clubNames.map((name, index) => (
    <p key={index + 1}>{name}</p>
  ));
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
  return (
    <div className="App">
      <Header
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
        />
      )}
      {/* <SendOriginalDataClubsComponent /> */}
    </div>
  );
}
export default App;
