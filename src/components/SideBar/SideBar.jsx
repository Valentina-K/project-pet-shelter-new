import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
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
import {
  clearAttributes,
  toggleAttributes,
  clearFilters,
  toggleFilter,
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

  const items = useSelector(selectListAttrByCategory);
  const selectCategory = useSelector(selectSelectedCategory);
  const selectedCategoryId = selectCategory.id ? selectCategory.id : null;

  useEffect(() => {
    if (categories.length === 0 && !isLoading) {
      dispatch(getCategories());
    }
  }, [dispatch, isLoading, categories.length]);

  useEffect(() => {
    if (!selectCategory['id']) {
      setCategoryTitle(t('side-bar'));
    } else setCategoryTitle(categories[selectCategory['id'] - 1].name);
  }, [selectCategory, categories, t]);

  const handleCategoryChange = (categoryId) => {
    dispatch(toggleFilter({ category: categoryId }));
    dispatch(getCategoryById(Number(categoryId)));
    dispatch(clearAttributes());
  };

  const handleCloseClick = () => {
    dispatch(clearFilters());
    dispatch(clearAttributes());
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
