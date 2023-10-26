import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ type, title }) => {
  return (
    <button type={type} className={css.button}>
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Button;
