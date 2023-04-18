import styles from "./ErrorPage.module.scss";
import CustomButton from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateToClubsPageHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Oops!</h1>
        <p>We are really sorry, but the page you requested cannot be found. </p>
        <img
          className={styles.image}
          src={require("../../assets/images/error.png")}
          alt="oops"
        />
      </div>
      <div className={styles["button-container"]}>
        <CustomButton onClick={navigateToClubsPageHandler}>
          Go to Clubs
        </CustomButton>
      </div>
    </div>
  );
};
export default ErrorPage;
