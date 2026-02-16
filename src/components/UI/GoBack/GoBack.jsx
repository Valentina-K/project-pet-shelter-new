import { FaArrowLeftLong } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './GoBack.module.css';

function GoBack({ text, path }) {
  return (
    <div className={styles.container}>
      <FaArrowLeftLong />
      <NavLink to={path} className={styles.back}>
        {text}
      </NavLink>
    </div>
  );
}

GoBack.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default GoBack;
