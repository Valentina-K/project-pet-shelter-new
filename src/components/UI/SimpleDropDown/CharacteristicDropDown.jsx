import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleDropDown.module.css';

const CharacteristicDropDown = ({
  name,
  value,
  options,
  placeholder,
  onChange,
}) => {
  //const [selected, setSelected] = useState(value || placeholder || 'Select value');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //setSelected(option);
    setIsOpen(false);
    onChange(name, option);
  };

  // Закрытие списка при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div className={styles.selected} onClick={toggleDropdown}>
        {value || placeholder || 'Select value'}
        <span className={styles.arrow}>▼</span>
      </div>
      <ul
        className={isOpen ? `${styles.options} ${styles.open}` : styles.options}
      >
        {options.map((option, ind) => (
          <li key={ind} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

CharacteristicDropDown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default CharacteristicDropDown;
