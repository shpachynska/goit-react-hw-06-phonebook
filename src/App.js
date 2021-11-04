import "./App.css";
import React from "react";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
//================================================
import Modal from "./components/Modal/Modal";
import IconButton from "./components/IconButton/IconButton";
import { ReactComponent as AddIcon } from "./components/IconButton/add.svg";
import Container from "./components/Container/Container";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <IconButton onClick={toggleModal}>
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className="form-section">
            <div className="form">
              <Form onSave={toggleModal} />
            </div>
          </div>
        </Modal>
      )}

      <div className="contacts-section">
        <b className="title">Contacts</b>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
