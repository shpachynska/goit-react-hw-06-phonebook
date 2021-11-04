import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/add", (data) => {
  return {
    payload: {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    },
  };
});

const deleteContact = createAction("phonebook/delete");

const changeFilter = createAction("phonebook/changeFilter");

const phonebookActions = { addContact, deleteContact, changeFilter };

export default phonebookActions;
