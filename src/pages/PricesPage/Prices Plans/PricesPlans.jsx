import styles from "./PricesPlans.module.scss";
import { getPrices } from "../../../util/helpers.js";
import { PRICES_URL, UNSUCCESSFUL_REQUEST } from "../../../util/config";
import { useEffect, useState, Fragment } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../../components/Buttons/Button";
const PricesPlans = () => {
  const [prices, setPrices] = useState([]);
  const [isRejected, setIsRejected] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getPricesHandler = async () => {
    try {
      setIsLoading(true);
      const pricesArr = await getPrices(PRICES_URL, UNSUCCESSFUL_REQUEST);
      setPrices(Object.values(pricesArr)[0]);
    } catch (err) {
      setIsRejected(true);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (prices.length === 0) {
      getPricesHandler();
    }
  }, [prices.length]);
  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.spinner} />}
      {isRejected && <ErrorMessage errorMsg={error} />}
      {!isLoading && !isRejected && prices.length > 0 && (
        <Fragment>
          <div className={styles["header-container"]}>
            <h1 className={styles["header-container-title"]}>PRICE LIST</h1>
            <h2>STUDIO CLASSES AND SAUNA/STEAMBATH INCLUDED</h2>
          </div>
          <div className={styles["price-list-container"]}>
            {prices.map((plan, index) => (
              <div key={index} className={styles["price-list-item"]}>
                <h2 className={styles["price-list-item-name"]}>{plan.name}</h2>
                <p className={styles["price-list-item-price"]}>
                  Price: {plan.price}
                </p>
                {plan.name !== "Single entry" && (
                  <Fragment>
                    <p className={styles["price-list-item-term"]}>
                      ({plan.term})
                    </p>
                    <ul className={styles["price-list-item-characteristics"]}>
                      {plan.characteristics.map((characteristic, index) => (
                        <li
                          className={styles["price-list-item-characteristic"]}
                          key={index}
                        >
                          <FontAwesomeIcon icon={faCheck} color="#012b82" />
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                    {plan.bonuses && (
                      <ul className={styles["price-list-item-bonuses"]}>
                        {plan.bonuses.map((bonus, index) => (
                          <li
                            className={styles["price-list-item-bonus"]}
                            key={index}
                          >
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              color="#012b82"
                            />
                            {bonus}
                          </li>
                        ))}
                      </ul>
                    )}
                    <CustomButton>Order Online</CustomButton>
                  </Fragment>
                )}
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default PricesPlans;
