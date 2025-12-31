import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  /* getCategories, */
  getCategoryById,
} from '../../redux/categories/operations';
import { useTranslation } from 'react-i18next';
import {
  selectCategories,
  selectIsLoading,
  selectError,
  selectSelectedCategory,
} from '../../redux/categories/selectors.js';
import AttributesFilter from '../AttributesFilter/AttributesFilter.jsx';
import toast from 'react-hot-toast';
import {
  clearAttributes,
  toggleFilter,
  toggleAttributes,
} from '../../redux/categories/slice.js';
import DropDown from './DropDown/DropDown.jsx';
import { selectListAttrByCategory } from '../../redux/advertisements/selectors.js';

function SideBar() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const categories = useSelector(selectCategories); //get all categories
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [categoryTitle, setCategoryTitle] = useState(t('side-bar'));
  //const [notSelected, setNotSelected] = useState(true);

  const items = useSelector(selectListAttrByCategory);
  const selectCategory = useSelector(selectSelectedCategory);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  /* useEffect(() => {
    if (categories.length === 0 && !isLoading) {
      dispatch(getCategories());
    }
  }, [dispatch, isLoading, categories.length]); */

  useEffect(() => {
    const fetchAttributes = async () => {
      if (selectedCategoryId) {
        try {
          const categoryId = Number(selectedCategoryId);
          dispatch(getCategoryById(categoryId));
        } catch (err) {
          toast.error('Error fetching category attributes:', err);
        }
      }
    };
    fetchAttributes();
  }, [selectedCategoryId, dispatch]);

  useEffect(() => {
    if (!selectCategory['id']) {
      setCategoryTitle(t('side-bar'));
      //setNotSelected(true);
    } else setCategoryTitle(categories[selectCategory['id'] - 1].name);
  }, [selectCategory, categories, t]);

  const handleCategoryChange = (categoryId) => {
    //setNotSelected(false);
    setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId));
    dispatch(toggleFilter({ category: categoryId }));
    dispatch(clearAttributes());
  };

  const handleCloseClick = () => {
    dispatch(clearAttributes());
    //setCategoryTitle(t('side-bar'));
    setSelectedCategoryId(null);
  };

  const handleSelectedAttribute = (attributeName) => {
    dispatch(toggleAttributes(attributeName));
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DropDown
        contents={categories}
        title={categoryTitle}
        onChange={handleCategoryChange}
        onClear={handleCloseClick}
        value={selectedCategoryId}
      />
      {items?.length > 0 && (
        <AttributesFilter
          attributes={items}
          onSelectedAttribute={handleSelectedAttribute}
        />
      )}
    </>
  );
}

export default SideBar;
