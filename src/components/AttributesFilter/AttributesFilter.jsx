import PropTypes from 'prop-types';
import styles from './AttributesFilter.module.css';
import AttributeDropDown from './AttributeDropDown';

function AttributesFilter({ attributes, onSelectedAttribute }) {
  console.log('attributes', attributes);
  const handleClick = (value) => {
    console.log('selectedAttribute', value);
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
            selectedAttribute={attribute.value}
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
