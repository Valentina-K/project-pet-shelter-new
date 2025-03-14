import PropTypes from 'prop-types';
import AttributeDropDown from './AttributeDropDown/AttributeDropDown';
import styles from './AttributesFilter.module.css';
import BreedDropDown from './AttributeDropDown/BreedDropDown';

function AttributesFilter({ attributes, onSelectedAttribute }) {
  const handleClick = (value) => {
    onSelectedAttribute(value);
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        {attributes.map(
          (attribute, index) =>
            attribute.length > 0 &&
            (attribute[0].name === 'breed' ? (
              <BreedDropDown
                key={index}
                contents={attribute}
                onChange={handleClick}
              />
            ) : (
              <AttributeDropDown
                key={index}
                contents={attribute}
                onChange={handleClick}
              />
            ))
        )}
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
