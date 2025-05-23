import styles from './Section.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Section({ children, className }) {
  return (
    <section className={clsx(styles.section, className)}>{children}</section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
