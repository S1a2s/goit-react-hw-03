import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactListItem}>
            <Contact
              handleDelete={handleDelete}
              contactName={name}
              contactNumber={number}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;