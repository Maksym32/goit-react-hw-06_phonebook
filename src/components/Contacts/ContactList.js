import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
import {List} from "./ContactList.styled"
export function ContactList({ contacts }) {
    return (
        <>
        <h2 style={{ textAlign: 'center' }}>Contact List</h2>
        <List>
            {contacts.length ?
                contacts.map((contact, idx) => (
                    <ContactItem key={contact.id} contact={contact} idx={idx} />
                ))
                : <p>No any contacts</p>}
        </List>  
        </>
    )
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
}