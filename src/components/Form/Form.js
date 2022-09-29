import { useState } from "react";
import PropTypes from "prop-types";
import { Section } from "../Section/Section";
import { connect, useSelector } from "react-redux";
import { addContact } from "../../Redux/contacts-actions";
import {ContactsForm, FormInput, Label} from './Form.styled'

function Form({ onSubmit }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    const findName = contacts.find(contact => (contact.name.toLowerCase() === name.toLowerCase()));
    const findNumber = contacts.find(contact => contact.number === number);


    if (findName)
      return alert(findName.name + " is already in contacts");
    
    if (findNumber) 
      return alert(`This phone number is already in use.`);
    
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;


    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Section title="Phonebook">
      <ContactsForm onSubmit={handleSubmit}>
        <Label htmlFor="input-name">
          Name
        <FormInput
          type="text"
          name="name"
          value={name}
          id="input-name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </Label>

        <Label htmlFor="input-number">
          Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          id="input-number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </Label>
        <button type="submit">Add contact</button>
      </ContactsForm>
    </Section>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};