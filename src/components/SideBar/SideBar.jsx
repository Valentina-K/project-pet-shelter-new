import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getCategoryById,
} from '../../redux/categories/operations';
import {
  selectCategories,
  selectIsLoading,
  selectError,
} from '../../redux/categories/selectors.js';
import AttributesFilter from '../AttributesFilter/AttributesFilter.jsx';
import toast from 'react-hot-toast';
import styles from './SideBar.module.css';
import { toggleFilter } from '../../redux/categories/slice.js';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
//import { selectTotalElements } from '../../redux/advertisements/selectors.js';

function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  //const quantityAds = useSelector(selectTotalElements);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('Categories');

  useEffect(() => {
    if (categories.length === 0 && !isLoading) {
      dispatch(getCategories());
    }
  }, [dispatch, isLoading, categories.length]);

  useEffect(() => {
    const fetchAttributes = async () => {
      if (selectedCategoryId) {
        try {
          const categoryId = Number(selectedCategoryId);
          const action = await dispatch(getCategoryById(categoryId));
          if (getCategoryById.fulfilled.match(action)) {
            setAttributes(action.payload.attribute || []);
            console.log(getCategoryById.fulfilled.match(action));
          }
        } catch (err) {
          toast.error('Error fetching category attributes:', err);
        }
      } else {
        setAttributes([]);
      }
    };
    fetchAttributes();
  }, [selectedCategoryId, dispatch]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    dispatch(toggleFilter(categoryId));
    setCategoryTitle(categories[categoryId - 1].name);
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
        <h2 className={styles.category}>{categoryTitle}</h2>
        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isDropdownOpen && (
        <div>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul className={styles.optionsList}>
            {categories.map((category) => (
              <li key={category.id} className={styles.optionsItem}>
                <span className={styles.itemWrapper}>
                  {category.name}
                  <span>(1224)</span>
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
      {attributes.length > 0 && <AttributesFilter attributes={attributes} />}
    </div>
  );
}

AttributesFilter.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SideBar;
