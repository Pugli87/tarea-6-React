import PropTypes from 'prop-types';
import css from './Label.module.css';

const Label = ({ labelTitle, children }) => {
  return (
    <label className={css.label}>
      {labelTitle}
      {children}
    </label>
  );
};

Label.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Label;
