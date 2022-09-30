import { useSelector } from 'react-redux';
import { InputForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/Contacts/ContactList';
import { InputFormBox } from './components/Form/Form.styled';
import { ContactListBox } from './components/Contacts/ContactList.styled';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
  const myFilter = useSelector(store => store.contacts.filter);
  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <>
      <InputFormBox>
        <h1 style={{textAlign: 'center'}}>Phonebook</h1>
        <InputForm/>
      </InputFormBox>
      <ContactListBox>
        <Filter/>
          <ContactList contacts={filteredContacts}/> 
      </ContactListBox>
    </>
  );
}
