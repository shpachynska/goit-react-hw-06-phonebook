import types from "./phonebook-types";
import shortid from "shortid";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (data) => ({
  type: types.CHANGE_FILTER,
  payload: data,
});

export default { addContact, deleteContact, changeFilter };
