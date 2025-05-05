import PropTypes from 'prop-types';
import styles from './styles.module.css';

function SectionTitle({ text }) {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
