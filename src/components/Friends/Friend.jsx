import { styles } from "./Friend.module.css";
const Friend = () => {
  return (
    <>
      <li className={styles["friends-list--items"]}>
        <img src="https://img.freepik.com/free-vector/organic-flat-abstract-element-pattern_23-2148950504.jpg?w=900&t=st=1708412316~exp=1708412916~hmac=67c1a5044b9d1fca87638aa46f286df3bfd08ec0d596374c549cefe269b0f9fa"></img>
        <span> Friend 1</span>
        <div
          className={`${styles["friends-list--items--amount"]} ${styles.owe}`}
        >
          <span>you owe</span>
          <span>
            <span className={`material-symbols-outlined  ${styles.owe}`}>
              currency_rupee
            </span>
            100
          </span>
        </div>
      </li>
    </>
  );
};

export default Friend;
