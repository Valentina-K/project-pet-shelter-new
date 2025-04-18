import PropTypes from 'prop-types';
import Card from '../../Card/PetCard/Card.jsx';
import SectionTitle from '../../UI/SectionTitle.jsx';
import styles from './OurAnimals.module.css';
import Button from '../../UI/Button.jsx';

function OurAnimals({ ads = [], onViewMoreClick, limit }) {
  const isHasMore = ads.length < limit;
  return (
    <div className={styles.section}>
      <SectionTitle text={'Our animals'} />
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
        <Button className={styles.morebutton} onClick={onViewMoreClick}>
          View more
        </Button>
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
