import styles from "./Friend.module.css";
const Friend = ({ id, name, amount, icon }) => {
  return (
    <>
      <li key={id} className={styles["friends-list--items"]}>
        <img key={"icon" + id} src={icon}></img>
        <span key={"name" + id}> {name}</span>
        <div
          className={`${styles["friends-list--items--amount"]} ${amount < 0 ? styles.owe : styles.get}`}
        >
          <span>you owe</span>
          <span>
            <span
              className={`material-symbols-outlined  ${amount < 0 ? styles.owe : styles.get}`}
            >
              currency_rupee
            </span>
            <span> {Math.abs(amount)}</span>
          </span>
        </div>
      </li>
    </>
  );
};

export default Friend;
