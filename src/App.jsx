import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const initialList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactList, setContactList] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts !== null ? savedContacts : initialList;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const visibleContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContact = (newContact) => {
    const newFullContact = { id: nanoid(), ...newContact };
    return setContactList((prevContacts) => [...prevContacts, newFullContact]);
  };

  const onDeleteContact = (contactId) => {
    return setContactList((prevContacts) => {
      return prevContacts.filter((contact) => contact["id"] !== contactId);
    });
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={onAddContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} handleDelete={onDeleteContact} />
    </div>
  );
}

export default App;