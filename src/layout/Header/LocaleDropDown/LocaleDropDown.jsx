import { useState } from 'react';
import styles from './LocaleDropDown.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const locale = ['EN', 'UA'];

function LocaleDropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [choiseLocale, setChoiseLocale] = useState('EN');
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleChoiseLocale = (locale) => {
    setChoiseLocale(locale);
    setIsDropdownOpen(false);
    // need to add logic to change the language
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
