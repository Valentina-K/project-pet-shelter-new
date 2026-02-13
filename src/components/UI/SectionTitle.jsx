import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.css';

function SectionTitle({ text, className }) {
  return <h2 className={clsx(styles.sectionTitle, className)}>{text}</h2>;
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
