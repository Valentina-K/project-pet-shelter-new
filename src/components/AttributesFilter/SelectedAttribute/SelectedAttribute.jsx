import { RxCrossCircled } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { selectSelectedAttributes } from '../../../redux/categories/selectors';
import { clearAttributeByName } from '../../../redux/categories/slice';
import { useSelector } from 'react-redux';
import styles from './SelectedAttribute.module.css';

function SelectedAttribute() {
  const selectedAttributes = useSelector(selectSelectedAttributes);
  const dispatch = useDispatch();
  const handleClickedAttribute = (attribute) => {
    console.log(attribute);
    dispatch(clearAttributeByName(attribute));
  };

  return (
    <div className={styles.filterBlock}>
      {selectedAttributes.map((attr) => (
        <div key={attr} className={styles.filter}>
          {attr}
          <RxCrossCircled
            className={styles.icon}
            onClick={() => handleClickedAttribute(attr)}
          />
        </div>
      ))}
    </div>
  );
}

export default SelectedAttribute;
