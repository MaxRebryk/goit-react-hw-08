import { IoPerson } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import css from "./Contact.module.css";

type Props = {
  id: string;
  name: string;
  number: string;
  onDelete: void;
};

const Contact: React.FC<Props> = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <div className={css.container}>
        <IoPerson />
        <h3>{name}</h3>
      </div>
      <div className={css.container}>
        <IoPhonePortrait />
        <h3>{number}</h3>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
