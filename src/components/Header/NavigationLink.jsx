import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.scss";
const NavigationLink = ({ to, children }) => {
  const toggleActiveLink = ({ isActive }) => (isActive ? styles.active : "");
  return (
    <NavLink to={to} className={toggleActiveLink}>
      {children}
    </NavLink>
  );
};
export default NavigationLink;
