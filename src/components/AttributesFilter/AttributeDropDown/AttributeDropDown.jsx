import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './AttributeDropDown.module.css';

function AttributeDropDown({ contents, onChange }) {
  //console.log('selectedAttribute', selectedAttribute);
  //console.log('contents', contents);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCategoryChange = (attributeName) => {
    setSelectedValue((prev) => (prev === attributeName ? null : attributeName));
    const choiceAttribute = {
      [`attribute_${contents[0].name}`]: attributeName,
    };
    onChange(choiceAttribute);
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
                    type="checkbox"
                    name="attribute"
                    value={attribute.name}
                    checked={selectedValue === attribute.value}
                    onClick={() => handleCategoryChange(attribute.value)}
                    onChange={() => {}}
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
};

export default AttributeDropDown;
