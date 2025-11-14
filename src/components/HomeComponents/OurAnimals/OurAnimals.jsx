import PropTypes from 'prop-types';
import Card from '../../Card/PetCard/Card.jsx';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Button from '../../UI/Button.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './OurAnimals.module.css';
import Loader from '../../Loader/Loader.jsx';
//import Loader from '../../Loader/Loader.jsx';

function OurAnimals({ ads = [], onViewMoreClick, limit }) {
  const isHasMore = ads.length < limit;
  console.log('from our animals', ads);
  const { t } = useTranslation();
  return (
    <Section>
      <SectionTitle text={t('home.titles.our-animals')} />
      <div className={styles.animalsBlock}>
        {ads.length === 0 ? (
          <Loader />
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
    </Section>
  );
}

OurAnimals.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
  onViewMoreClick: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default OurAnimals;
