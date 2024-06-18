import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoginedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.navigation}>
      <Navigation />
      {isLoginedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
