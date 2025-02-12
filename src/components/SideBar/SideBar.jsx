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
import { setPage } from '../../redux/advertisements/slice.js';
import { selectListAttrByCategory } from '../../redux/advertisements/selectors.js';

function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories); //get all categories
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectListAttrByCategory);
  const selectCategory = useSelector(selectSelectedCategory);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
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
          const action = dispatch(getCategoryById(categoryId));
          if (getCategoryById.fulfilled.match(action)) {
            dispatch(setPage(0));
          }
        } catch (err) {
          toast.error('Error fetching category attributes:', err);
        }
      }
    };
    fetchAttributes();
  }, [selectedCategoryId, dispatch]);

  useEffect(() => {
    if (!selectCategory['id']) setCategoryTitle('Categories');
    else setCategoryTitle(categories[selectCategory['id'] - 1].name);
  }, [selectCategory, categories]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId((prev) => (prev === categoryId ? '' : categoryId));
    dispatch(toggleFilter({ category: categoryId }));
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
