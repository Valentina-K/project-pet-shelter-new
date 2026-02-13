import { useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
} from 'react-icons/fa6';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const HeaderItem = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('from dropdown');
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.x}>
            {user.userRole === 'SHELTER' ? '🏠' : '👤'}
          </span>
          <span className={styles.y}>
            {user.userRole === 'SHELTER'
              ? user.firstName
              : `${user.firstName} ${user.lastName}`}
          </span>
        </div>
        <div className={styles.headerRight}>
          <a
            href={
              user.contactInfo?.facebook
                ? `https://www.facebook.com/${user.contactInfo.facebook}`
                : 'https://www.facebook.com'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href={
              user.contactInfo?.instagram
                ? `https://www.instagram.com/${user.contactInfo.instagram}`
                : 'https://www.instagram.com'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          {user.userRole === 'SHELTER' && <FaGlobe />}
          <FaEnvelope />
          <FaPhone />
          <button onClick={toggleDropdown}>
            <FaChevronDown
              className={
                isOpen
                  ? `${styles.chevronIcon} ${styles.chevronRotated}`
                  : styles.chevronIcon
              }
            />
          </button>
        </div>
      </div>

      <div
        className={
          isOpen ? `${styles.dropdownMenu} ${styles.open}` : styles.dropdownMenu
        }
      >
        <p>
          {user.contactInfo?.mission
            ? user.contactInfo.mission
            : 'Author did not write information about itself yet'}
        </p>
        <div className="mt-3 space-y-2">
          <p className={styles.dropdownItem}>
            <FaPhone />{' '}
            {user.contactInfo?.phone
              ? user.contactInfo.phone
              : 'The phone is missing'}
          </p>
          {user.userRole === 'SHELTER' && (
            <p className={styles.dropdownItem}>
              <FaGlobe />{' '}
              <a
                href={
                  user.contactInfo?.website ? user.contactInfo.website : '/'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.contactInfo?.website
                  ? user.contactInfo.website
                  : 'The website is missing'}
              </a>
            </p>
          )}
          <p className={styles.dropdownItem}>
            <FaEnvelope /> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

HeaderItem.propTypes = {
  user: PropTypes.shape({
    userRole: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    contactInfo: PropTypes.shape({
      website: PropTypes.string,
      mission: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      telegram: PropTypes.string,
      phone: PropTypes.string,
    }),
  }),
};
export default HeaderItem;
//user.contactInfo?.telegram
// ? `https://t.me/${user.contactInfo.telegram}`
// : 'https://t.me',
