import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleDropDown.module.css';

const SimpleDropDown = ({ options, placeholder, onChange }) => {
  const [selected, setSelected] = useState(placeholder || 'Select animal type');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option.name);
    setIsOpen(false);
    onChange(option);
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
    <div
      className={styles.customSelect}
      style={{ width: '200px' }}
      ref={selectRef}
    >
      <div className={styles.selected} onClick={toggleDropdown}>
        {selected}
        <span className={styles.arrow}>▼</span>
      </div>
      <ul
        className={isOpen ? `${styles.options} ${styles.open}` : styles.options}
      >
        {options.map((option) => (
          <li key={option.id} onClick={() => handleOptionClick(option)}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

SimpleDropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SimpleDropDown;
