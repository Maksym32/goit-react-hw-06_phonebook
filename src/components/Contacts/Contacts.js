import React from "react";
import { Section } from "../Section/Section";
import { ContactsItem } from "../Contacts/Contactsitem";
import { ContactsList } from "./Contacts.styled.js";
import { connect } from "react-redux";
import { deleteContact } from "../../Redux/contacts-actions";

import PropTypes from "prop-types";
const Contacts = ({ contacts, deleteHandler }) => (
  <Section title="Contacts">
    <ContactsList>
      {contacts.length === 0 ? (
        <h3>Please add contact</h3>
      ) : (
        contacts.map(({ name, id, number }) => (
          <ContactsItem
            deleteFunc={() => deleteHandler(id)}
            name={name}
            key={id}
            number={number}
          />
        ))
      )}
    </ContactsList>
  </Section>
);
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);