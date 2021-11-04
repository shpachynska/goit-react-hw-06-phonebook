import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.Contact__list}>
      {contacts.map((contact) => (
        <li className={styles.ContactList__item} key={contact.id}>
          <span>{contact.name}:&nbsp;</span>
          <span>{contact.number}</span>
          <button
            id={contact.id}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.phonebook;
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
