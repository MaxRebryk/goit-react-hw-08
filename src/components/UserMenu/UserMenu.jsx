import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(selectToken));
  };

  return (
    <div className={css.div}>
      <h3>Hello {user.name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
