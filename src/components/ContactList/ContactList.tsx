import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts//selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredcontacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";

export type Contact = {
  id: string;
  name: string;
  number: string;
};

const ContactList: React.FC = () => {
  const items: Contact[] = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filteredItems: Contact[] = useSelector(selectFilteredcontacts);
  const handleDelete = (id: string): void => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredItems.length != 0
        ? filteredItems.map((contact: Contact) => {
            return (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact.id)}
              />
            );
          })
        : items.map((contact: Contact) => {
            return (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact.id)}
              />
            );
          })}
    </ul>
  );
};

export default ContactList;
