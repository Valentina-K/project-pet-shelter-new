import PropTypes from 'prop-types';
import Card from '../Card/PetCard/Card.jsx';
import styles from './OurAnimals.module.css';

function OurAnimals({ ads = [], onViewMoreClick, limit }) {
  console.log(limit, ads.length);
  const isHasMore = ads.length < limit;
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
      {isHasMore && (
        <button className={styles.morebutton} onClick={onViewMoreClick}>
          View more
        </button>
      )}
    </div>
  );
}

OurAnimals.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
  onViewMoreClick: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default OurAnimals;
