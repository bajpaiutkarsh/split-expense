import { useEffect, useState } from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend";

const Friends = ({ id }) => {
  const [balance, setBalance] = useState(0);
  let heading = <div> Nothing to settle</div>;
  useEffect(() => {
    setBalance(-100);
  }, []);

  const friendsList = [<Friend></Friend>];

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
