import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import styles from './AuthSocial.module.css';

const AuthSocial = ({ addStyle = '' }) => {
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
        href="https://www.x.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaXTwitter className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
      <a
        href="https://gmail.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaGoogle className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
      <a
        href="https://www.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaApple className={`${styles.icon} ${styles[addStyle]}`} />
      </a>
    </div>
  );
};

AuthSocial.propTypes = {
  addStyle: PropTypes.string,
};

export default AuthSocial;
