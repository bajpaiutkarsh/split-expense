import { useEffect, useState } from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend";
import { getRandomImage } from "../Utility/Images";

const Friends = ({ id }) => {
  const [balance, setBalance] = useState(0);
  let heading = <div> Nothing to settle</div>;
  useEffect(() => {
    setBalance(-100);
  }, []);
  const friendsList = [
    <Friend id="1" name="Garima" amount={-2000} icon={getRandomImage()} />,
    <Friend id="2" name="Aayush" amount={2000} icon={getRandomImage()} />,
    <Friend id="3" name="Mohita" amount={-2000} icon={getRandomImage()} />,
    <Friend id="4" name="Papa" amount={12000} icon={getRandomImage()} />,
    <Friend id="5" name="Mummy" amount={4000} icon={getRandomImage()} />,
    <Friend id="6" name="Addu MF" amount={100000} icon={getRandomImage()} />,
    <Friend id="7" name="Loan" amount={27000} icon={getRandomImage()} />,
    <Friend id="7" name="Loan" amount={27000} icon={getRandomImage()} />,
  ];

  if (balance < 0) {
    heading = (
      <>
        <div className={`container ${styles.width100}`}>
          <div className={styles.heading}>
            <span>Overall, you owe</span>
            <span className={`material-symbols-outlined ${styles.middle}`}>
              currency_rupee
            </span>
            <span className={styles.owe}>{balance}</span>
          </div>
          <div className={styles["friends-list"]}>
            <ul className={styles["friends-list--container"]}>{friendsList}</ul>
          </div>
        </div>
      </>
    );
  } else if (balance > 0) {
    heading = (
      <>
        <div className={`container ${styles.width100}`}>
          <div className={styles.heading}>
            <span>You are owed</span>
            <span className={`material-symbols-outlined ${styles.middle}`}>
              currency_rupee
            </span>
            <span className={styles.get}>{balance}</span>
          </div>
          <div className={styles["friends-list"]}>
            <ul className={styles["friends-list--container"]}>{friendsList}</ul>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`container ${styles.middle}`}>{heading}</div>
    </>
  );
};
export default Friends;
