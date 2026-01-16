import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './LocaleDropDown.module.css';

const locale = ['en', 'ua'];

function LocaleDropDown({ className, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const [choiseLocale, setChoiseLocale] = useState(i18n.language);

  let topContent = isMobile
    ? choiseLocale === 'ua'
      ? 'Укр'
      : 'Eng'
    : choiseLocale === 'ua'
      ? 'UA'
      : 'EN';

  let bottomContent = isMobile
    ? choiseLocale === 'en'
      ? 'Укр'
      : 'Eng'
    : choiseLocale === 'en'
      ? 'UA'
      : 'EN';
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleChoiseLocale = (locale) => {
    i18n.changeLanguage(locale);
    setChoiseLocale(locale);
    setIsDropdownOpen(false);
  };
  const classContainer = clsx(styles.localeContainer, className);
  return (
    <div className={styles.wrapper}>
      <div className={classContainer} onClick={handleToggleDropdown}>
        <h2 className={styles.choiseLocale}>{topContent}</h2>
        {isDropdownOpen ? (
          <IoIosArrowUp className={styles.dropdownIcon} />
        ) : (
          <IoIosArrowDown className={styles.dropdownIcon} />
        )}
      </div>
      {isDropdownOpen && (
        <div
          className={styles.openDrop}
          onClick={() =>
            handleChoiseLocale(locale.filter((loc) => loc != choiseLocale)[0])
          }
        >
          {bottomContent}
        </div>
      )}
    </div>
  );
}

LocaleDropDown.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default LocaleDropDown;
