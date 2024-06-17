import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./LoginRegisterNav.module.css";

export default function LoginRegisterNav() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.navigation}>
      <nav className={css.nav}>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
      </nav>
    </div>
  );
}
