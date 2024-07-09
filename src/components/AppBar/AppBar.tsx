import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu//UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar: React.FC = () => {
  const isLoginedIn: boolean = useSelector(selectIsLoggedIn);
  return (
    <header className={css.navigation}>
      <Navigation />
      {isLoginedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
