import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/auth//selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth//operations";

type User = {
  name: string | null;
  email: string | null;
};

const UserMenu: React.FC = () => {
  const user: User = useSelector(selectUser);
  const token: string | null = useSelector(selectToken);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(token));
  };

  return (
    <div className={css.div}>
      <h3>Hello {user.name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
