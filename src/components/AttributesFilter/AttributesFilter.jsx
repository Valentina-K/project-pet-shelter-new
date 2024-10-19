import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

function AttributesFilter({ attributes }) {
  return (
    <>
      <ul>
        {attributes.map((attribute) => (
          <li key={nanoid()}>{attribute.name}</li>
        ))}
      </ul>
    </>
  );
}

AttributesFilter.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AttributesFilter;
