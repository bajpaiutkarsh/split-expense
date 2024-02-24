import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Root.module.css";
const Root = () => {
  let header = <Header></Header>;
  let path = useLocation().pathname;
  if (path.startsWith("/friend/")) {
    header = null;
  }
  return (
    <>
      {header}
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
      <button className={styles["add-expense"]}>
        <span className="material-symbols-outlined">receipt</span>
        <span>Add Expense</span>
      </button>
    </>
  );
};
export default Root;
