import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import styles from './OurAnimals.module.css';

function OurAnimals({ ads = [] }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Our animals</h2>
      <div className={styles.animalsBlock}>
        {ads.length === 0 ? (
          <p>No advertisements available.</p>
        ) : (
          ads.map((card) => (
            <div className={styles.item} key={card.id}>
              <Card ad={card} />
            </div>
          ))
        )}
      </div>
      <button className={styles.morebutton}>View more</button>
    </div>
  );
}

OurAnimals.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OurAnimals;
