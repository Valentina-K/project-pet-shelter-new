import PropTypes from 'prop-types';
import styles from './SendMessageWindow.module.css';

function SendMessageWindow({ text }) {
  return <div className={styles.wrapper}>{text}</div>;
}

SendMessageWindow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SendMessageWindow;
