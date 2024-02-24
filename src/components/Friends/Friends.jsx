import { useEffect, useState } from "react";
import styles from "./Friends.module.css";

const Friends = ({ id }) => {
  const [balance, setBalance] = useState(0);
  let heading = <div> Nothing to settle</div>;
  useEffect(() => {
    setBalance(-100);
  }, []);

  if (balance < 0) {
    heading = (
      <>
        Overall, you owe
        <span className={`material-symbols-outlined ${styles.middle}`}>
          currency_rupee
        </span>
        <label className={styles.owe}>{balance}</label>
      </>
    );
  } else if (balance > 0) {
    heading = (
      <>
        You are owed
        <span className={`material-symbols-outlined ${styles.middle}`}>
          currency_rupee
        </span>
        <label className={styles.get}>{" " + balance}</label>
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
