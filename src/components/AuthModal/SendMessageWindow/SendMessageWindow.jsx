import PropTypes from 'prop-types';
import styles from './SendMessageWindow.css';

function SendMessageWindow({ text }) {
  return <div className={styles.wrapper}>{text}</div>;
}

SendMessageWindow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SendMessageWindow;
