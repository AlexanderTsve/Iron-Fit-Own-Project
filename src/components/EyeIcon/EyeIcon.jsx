import styles from "./EyeIcon.module.scss";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const EyeIcon = ({ onClick, icon }) => {
  const [toggleHover, setToggleHover] = useState(false);
  const hoverHandler = () => {
    setToggleHover(true);
  };
  const unhoverHandler = () => {
    setToggleHover(false);
  };
  return (
    <InputGroup.Text>
      <span
        className={styles.icon}
        onMouseEnter={hoverHandler}
        onMouseLeave={unhoverHandler}
        onClick={onClick}
      >
        <FontAwesomeIcon
          className="eye-icon"
          icon={icon}
          style={
            toggleHover
              ? { color: "#82b440", cursor: "pointer" }
              : { color: "#ffffff", cursor: "pointer" }
          }
        />
      </span>
    </InputGroup.Text>
  );
};
export default EyeIcon;
