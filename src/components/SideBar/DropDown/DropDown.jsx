import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import styles from './DropDown.module.css';

function DropDown({ contents, title, onChange, onClear, value }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //если категория была выбрана, то выпадающего списка нет, вместо этого крестик, заголовок - выбранная категория
  //если категория не выбрана, заголовок - Категории, выпадающий список с категориями, возможность открывать/закрывать список

  const isNotSelected = value === null; //value - categoryId

  const handleToggle = () => {
    if (!isNotSelected) return;
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (categoryId) => {
    setIsDropdownOpen(false);
    onChange(categoryId);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onClear();
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={
          isDropdownOpen && isNotSelected
            ? `${styles.categoriesContainer} ${styles.isOpen}`
            : styles.categoriesContainer
        }
        onClick={handleToggle}
      >
        <h2 className={styles.category}>{title}</h2>
        {!isNotSelected ? (
          <IoMdClose onClick={handleClear} />
        ) : isDropdownOpen ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowDown />
        )}
      </div>
      {isDropdownOpen && isNotSelected && (
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
                    checked={value === category.id}
                    onChange={() => handleSelect(category.id)}
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
  onClear: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default DropDown;
