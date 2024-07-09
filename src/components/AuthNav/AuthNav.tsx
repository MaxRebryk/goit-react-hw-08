import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav: React.FC = () => {
  const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
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
};

export default AuthNav;
