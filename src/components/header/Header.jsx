import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const path = useLocation().pathname;
  let add = null;
  if (path === "/") {
    add = <span className="material-symbols-outlined">group_add</span>;
  } else if (path == "/friends") {
    add = <span className="material-symbols-outlined">person_add</span>;
  }
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <span className="material-symbols-outlined">search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">{add}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
