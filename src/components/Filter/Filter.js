import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

const Filter = ({ value, onChange }) => (
  <div className={styles.Filter}>
    <label>
      Filter by name
      <input
        className={styles.filter__input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(phonebookActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
