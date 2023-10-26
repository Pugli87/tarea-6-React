import PropTypes from 'prop-types';
import css from './InputName.module.css';

const InputName = ({ name, onNameChange }) => {
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="Enter name"
      value={name}
      onChange={onNameChange}
      className={css.input}
    />
  );
};

InputName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputName;
