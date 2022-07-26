import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ type = 'button', disabled, label }) => {
  const btnStyles = [style.button];

  if (disabled) {
    btnStyles.push(style.button - disabled);
  }

  return (
    <button type={type} disabled={disabled} className={btnStyles.join(' ')}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
