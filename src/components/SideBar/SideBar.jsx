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
import {
  addFilter,
  clearAttributes,
  addAttributes,
} from '../../redux/categories/slice.js';
import DropDown from './DropDown/DropDown.jsx';
//import { selectTotalElements } from '../../redux/advertisements/selectors.js';

function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories); //get all categories
  //const quantityAds = useSelector(selectTotalElements);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [attributes, setAttributes] = useState([]);
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
          console.log(action);
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
    //dispatch(toggleFilter(categoryId));
    dispatch(addFilter({ category: categoryId }));
    setCategoryTitle(categories[categoryId - 1].name);
    dispatch(clearAttributes());
  };

  const handleSelectedAttribute = (attributeName) => {
    dispatch(addAttributes({ attributeName }));
    console.log(attributeName);
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
      {attributes.length > 0 && (
        <AttributesFilter
          attributes={attributes}
          onSelectedAttribute={handleSelectedAttribute}
        />
      )}
    </>
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
