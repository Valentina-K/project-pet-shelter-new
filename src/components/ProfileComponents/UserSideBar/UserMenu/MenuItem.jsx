import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

function MenuItem({ image, text, className }) {
  return (
    <div className={`${styles.menuItem} ${className}`}>
      <div className={styles.icon}>{image}</div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

MenuItem.propTypes = {
  image: PropTypes.node,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default MenuItem;
