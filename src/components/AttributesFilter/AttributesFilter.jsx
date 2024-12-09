import PropTypes from 'prop-types';
import styles from './AttributesFilter.module.css';
//import DropDown from '../SideBar/DropDown/DropDown';

function AttributesFilter({ attributes, onSelectedAttribute }) {
  const handleClick = (attributeName) => {
    onSelectedAttribute(attributeName);
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        {attributes.map((attribute) => (
          <li key={attribute.id} onClick={() => handleClick(attribute.name)}>
            {attribute.name}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
/* <DropDown contents={} title={attribute.name} onChannge = {}/> */
AttributesFilter.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectedAttribute: PropTypes.func.isRequired,
};

export default AttributesFilter;
