import PropTypes from 'prop-types';
import styles from './JoinUsSection.module.css';

function JoinUsSection({ text }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Running a shelter?
        <br />
        {text}
      </h2>
      <button className={styles.button}>Join us</button>
    </div>
  );
}

JoinUsSection.propTypes = {
  text: PropTypes.string,
};
export default JoinUsSection;
