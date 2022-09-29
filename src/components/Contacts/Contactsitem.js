import React from "react";
import PropTypes from "prop-types";
import { ListItem, Button, ContactsTitle } from './Contacts.styled.js'
const ContactsItem = ({ id, name, number, deleteFunc }) => (
  <ListItem key={id}>
    <ContactsTitle>
      {name}:{number}
    </ContactsTitle>
    <Button type="button" onClick={deleteFunc}>
      Delete
    </Button>
  </ListItem>
);
ContactsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteFunc: PropTypes.func.isRequired,
};
export { ContactsItem };