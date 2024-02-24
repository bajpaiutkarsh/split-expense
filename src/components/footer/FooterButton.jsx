import { Link, NavLink } from "react-router-dom";
import styles from "./FooterButton.module.css";
const FooterButton = ({ name, img, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? styles.active : undefined)}
      onClick={() => {}}
    >
      <div>{name}</div>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {img && <img src={img} />}
    </NavLink>
  );
};

export default FooterButton;
