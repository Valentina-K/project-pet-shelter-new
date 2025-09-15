import PropTypes from 'prop-types';
import styles from './AuthContainer.module.css';

function AuthContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContainer;
