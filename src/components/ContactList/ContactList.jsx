import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredcontacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";

export default function ContactList() {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filteredItems = useSelector(selectFilteredcontacts);
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredItems.length != 0
        ? filteredItems.map((contact) => {
            return (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact.id)}
              />
            );
          })
        : items.map((contact) => {
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
}
