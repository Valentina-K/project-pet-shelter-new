import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './DropDown.module.css';

function DropDown({ contents, title, onChange, selectedCategoryId }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (categoryId) => {
    onChange(categoryId);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={
          isDropdownOpen
            ? `${styles.categoriesContainer} ${styles.isOpen}`
            : styles.categoriesContainer
        }
        onClick={handleToggleDropdown}
      >
        <h2 className={styles.category}>{title}</h2>
        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isDropdownOpen && (
        <div>
          <ul className={styles.optionsList}>
            {contents.map((category) => (
              <li key={category.id} className={styles.optionsItem}>
                <span className={styles.itemWrapper}>
                  {category.name}
                  <span>({category.adsCount})</span>
                </span>
                <label className={styles.customRadio}>
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategoryId === String(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className={styles.hiddenRadio}
                  />
                  <span className={styles.radioMark}></span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

DropDown.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedCategoryId: PropTypes.string.isRequired,
};

export default DropDown;
