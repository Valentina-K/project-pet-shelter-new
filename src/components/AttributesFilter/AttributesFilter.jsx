import PropTypes from 'prop-types';
import AttributeDropDown from './AttributeDropDown';
import { useState } from 'react';
import styles from './AttributesFilter.module.css';

function AttributesFilter({ attributes, onSelectedAttribute }) {
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const handleClick = (value) => {
    setSelectedAttribute(value);
    onSelectedAttribute(value);
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        {attributes.map((attribute, index) => (
          <AttributeDropDown
            key={index}
            contents={attribute}
            onChange={handleClick}
            selectedAttribute={selectedAttribute}
          />
        ))}
      </ul>
    </div>
  );
}

AttributesFilter.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        count: PropTypes.number,
      })
    ).isRequired
  ),
  onSelectedAttribute: PropTypes.func.isRequired,
};

export default AttributesFilter;
