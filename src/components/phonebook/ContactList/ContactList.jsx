import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/contacts/contacts-actions';
import { getItems, getFilter } from 'redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(actions.deleteContact(contactId));
  };

  return (
    <ul className={css.contacts}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filterValue.trim()))
        .map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <div>
              <p className={css.name}>{name}</p>
              <p className={css.number}>{number}</p>
            </div>
            <button type="button" onClick={() => handleDeleteContact(id)} className={css.delete}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
