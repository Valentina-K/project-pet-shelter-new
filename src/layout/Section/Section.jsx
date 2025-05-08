import styles from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
