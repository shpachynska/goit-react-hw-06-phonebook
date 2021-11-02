import "./App.css";
import React, { useEffect, useState } from "react";
import shortid from "shortid";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
//================================================
import Modal from "./components/Modal/Modal";
import IconButton from "./components/IconButton/IconButton";
import { ReactComponent as AddIcon } from "./components/IconButton/add.svg";
import Container from "./components/Container/Container";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts
  );
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addContact = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      setContacts([contact, ...contacts]);
    }
    toggleModal();
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(() => contacts.filter((contact) => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //============ modal window ============================
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  //======================================================
  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <IconButton onClick={toggleModal} aria-label="add contact">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className="form-section">
            <div className="form">
              <Form onSubmit={addContact} />
            </div>
          </div>
        </Modal>
      )}

      <div className="contacts-section">
        <b className="title">Contacts</b>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </Container>
  );
}
