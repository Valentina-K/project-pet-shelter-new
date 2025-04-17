import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.css';

function Button({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
