import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectUser } from "../../redux/auth/selectors";
const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <main>
      <div className={css.greet}>
        <h1>Hello {user.name}!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos
          deserunt impedit ipsa, amet minus dolor minima saepe tempore quidem
          quasi quaerat sequi unde, eaque aut. Assumenda sapiente impedit
          distinctio?
        </p>
      </div>
    </main>
  );
};
export default HomePage;
