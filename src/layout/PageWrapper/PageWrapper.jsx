import PropTypes from 'prop-types';
import styles from './PageWrapper.module.css';

function PageWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
