import { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBoxEmpty from '../../../assets/img/CheckboxEmpty.png';
import CheckBoxChecked from '../../../assets/img/CheckboxFull.png';
import { NavLink } from 'react-router-dom';
import styles from './CheckBox.module.css';

function CheckBox({ field, form }) {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
    form.setFieldValue(field.name, !checked);
  };
  return (
    <label className={styles.accept}>
      <img
        src={checked ? CheckBoxChecked : CheckBoxEmpty}
        alt={checked ? 'checked' : 'uncheck'}
        className={styles.acceptIcon}
        height="24"
        width="24"
      />
      <input
        type="checkbox"
        className={styles.checkbox}
        name="agree"
        id="agree"
        required
        checked={checked}
        onChange={handleToggle}
      />
      I have read the
      <NavLink to="/" className={styles.privacyLink}>
        &nbsp;Privacy Policy&nbsp;
      </NavLink>
      and acknowledge its terms.
    </label>
  );
}

CheckBox.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckBox;
