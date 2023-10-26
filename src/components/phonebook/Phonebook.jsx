import Wrapper from 'components/phonebook/Wrapper';
import Section from 'components/phonebook/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/phonebook/Filter';
import ContactList from 'components/phonebook/ContactList';
import Notification from 'components/phonebook/Notification';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/contacts-selectors';

function Phonebook() {
  const contacts = useSelector(getItems);

  return (
    <Wrapper>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="There are no contacts yet" />
        )}
      </Section>
    </Wrapper>
  );
}

export default Phonebook;
