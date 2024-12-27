import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import styles from './SocialLinks.module.css';

const SocialLinks = ({ addStyle = '' }) => {
  return (
    <div className={`${styles.container} ${styles[addStyle]}`}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaFacebook className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaInstagram className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaTelegram className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
    </div>
  );
};

SocialLinks.propTypes = {
  addStyle: PropTypes.string,
};

export default SocialLinks;
