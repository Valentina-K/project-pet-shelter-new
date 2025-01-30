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
import {
  addFilter,
  clearAttributes,
  addAttributes,
} from '../../redux/categories/slice.js';
import DropDown from './DropDown/DropDown.jsx';
import { setPage } from '../../redux/advertisements/slice.js';
import { selectListAttrByCategory } from '../../redux/advertisements/selectors.js';

function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories); //get all categories
  //const quantityAds = useSelector(selectTotalElements);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectListAttrByCategory);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  //const [attributes, setAttributes] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('Categories');
  console.log('items', items);
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
            //setAttributes(action.payload.attribute || []);
            dispatch(setPage(0));
          }
        } catch (err) {
          toast.error('Error fetching category attributes:', err);
        }
      } else {
        //setAttributes([]);
      }
    };
    fetchAttributes();
  }, [selectedCategoryId, dispatch]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    //dispatch(toggleFilter(categoryId));
    dispatch(addFilter({ category: categoryId }));
    setCategoryTitle(categories[categoryId - 1].name);
    dispatch(clearAttributes());
  };

  const handleSelectedAttribute = (attributeName) => {
    dispatch(addAttributes(attributeName));
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DropDown
        contents={categories}
        title={categoryTitle}
        onChange={handleCategoryChange}
        selectedCategoryId={String(selectedCategoryId)}
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
