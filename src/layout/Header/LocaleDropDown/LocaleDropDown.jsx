import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import styles from './LocaleDropDown.module.css';

const locale = ['en', 'ua'];

function LocaleDropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const [choiseLocale, setChoiseLocale] = useState(i18n.language);
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleChoiseLocale = (locale) => {
    i18n.changeLanguage(locale);
    setChoiseLocale(locale);
    setIsDropdownOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.localeContainer} onClick={handleToggleDropdown}>
        <h2 className={styles.choiseLocale}>{choiseLocale}</h2>
        {isDropdownOpen ? (
          <IoIosArrowUp className={styles.dropdownIcon} />
        ) : (
          <IoIosArrowDown className={styles.dropdownIcon} />
        )}
      </div>
      {isDropdownOpen && (
        <ul className={styles.optionsList}>
          {locale.map((choise, index) => (
            <li
              key={index}
              className={styles.optionsItem}
              onClick={() => handleChoiseLocale(choise)}
            >
              {choise}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocaleDropDown;
