import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaInstagram className={styles.icon} />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaFacebook className={styles.icon} />
      </a>
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FaTelegram className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialLinks;
