import React, { Component } from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
// import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(phonebookActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(Form);
// export default Form;

// import React, { useState } from "react";
// import styles from "./Form.module.css";

// export default function Form({ onSubmit }) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ name, number });

//     reset();
//   };

//   const reset = () => {
//     setName(name);
//     setNumber(number);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <p>Name</p>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         <p>Number</p>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </label>

//       <button className={styles.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
