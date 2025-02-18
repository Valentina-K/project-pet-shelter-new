import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import styles from './AttributeDropDown.module.css';

function BreedDropDown({ contents, onChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchContents, setSearchContents] = useState(contents);
  const handleCategoryChange = (attributeName) => {
    setSelectedValue((prev) => (prev === attributeName ? '' : attributeName));
    const choiceAttribute = {
      [`attribute_${contents[0].name}`]: attributeName,
    };
    onChange(choiceAttribute);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleChanged = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    if (contents.length > 1) setSelectedValue('');
  }, [contents.length]);

  useEffect(() => {
    if (searchValue) {
      const searchArr = contents.filter((item) =>
        item.value.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setSearchContents(searchArr);
    } else setSearchContents(contents);
  }, [searchValue, contents]);
  return (
    <div className={styles.wrapper}>
      <div
        className={
          isDropdownOpen
            ? `${styles.breedCategoriesContainer} ${styles.isOpenBreed}`
            : styles.categoriesContainer
        }
      >
        <div className={styles.titleContent}>
          <h2 className={styles.category}>{contents[0].name}</h2>
          {isDropdownOpen ? (
            <IoIosArrowUp onClick={handleToggleDropdown} />
          ) : (
            <IoIosArrowDown onClick={handleToggleDropdown} />
          )}
        </div>
        {isDropdownOpen && (
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <IoSearch className={styles.icon} />
            </div>
            <input
              type="text"
              className={styles.input}
              value={searchValue}
              onChange={handleChanged}
              onFocus={() => setSearchValue('')}
            />
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <div className={styles.breedListWrapper}>
          <ul className={styles.optionsList}>
            {searchContents.map((attribute, index) => (
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

BreedDropDown.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BreedDropDown;
