import { GrStar } from 'react-icons/gr';
import PropTypes from 'prop-types';
import styles from './Rating.module.css';

function Rating({ rating }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={styles.rating}>
      <div>
        {arr.map((value) => {
          const cln = value <= rating ? styles.star : styles.empty;
          return <GrStar key={value} className={cln} />;
        })}
      </div>
      <span>{rating}</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
