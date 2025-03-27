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

const HeaderItem = ({ type, name, website, contactInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      {/* Основной блок */}
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <div className={styles.headerLeft}>
          <span className="text-xl">{type === 'shelter' ? '🏠' : '👤'}</span>
          <span className="font-semibold">{name}</span>
        </div>
        <div className={styles.headerRight}>
          <FaFacebook />
          <FaInstagram />
          {type === 'shelter' && <FaGlobe />}
          <FaEnvelope />
          <FaPhone />
          <FaChevronDown
            className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
          />
        </div>
      </div>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
            irure dolor in reprehenderit.
          </p>
          <div className="mt-3 space-y-2">
            <p className={styles.dropdownItem}>
              <FaPhone /> {contactInfo.phone}
            </p>
            {type === 'shelter' && (
              <p className={styles.dropdownItem}>
                <FaGlobe />{' '}
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </p>
            )}
            <p className={styles.dropdownItem}>
              <FaEnvelope /> {contactInfo.email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

HeaderItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  contactInfo: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};
export default HeaderItem;
