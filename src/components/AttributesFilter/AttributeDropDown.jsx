import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../SideBar/DropDown/DropDown.module.css';

function AttributeDropDown({ contents, onChange, selectedAttribute }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (attributeName) => {
    onChange(attributeName);
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
        <h2 className={styles.category}>{contents[0].name}</h2>
        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isDropdownOpen && (
        <div>
          <ul className={styles.optionsList}>
            {contents.map((attribute, index) => (
              <li key={index} className={styles.optionsItem}>
                <span className={styles.itemWrapper}>
                  {attribute.value}
                  <span>({attribute.count})</span>
                </span>
                <label className={styles.customRadio}>
                  <input
                    type="radio"
                    name="category"
                    value={attribute.name}
                    checked={selectedAttribute === attribute.value}
                    onChange={() => handleCategoryChange(attribute.value)}
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

AttributeDropDown.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedAttribute: PropTypes.string.isRequired,
};

export default AttributeDropDown;
