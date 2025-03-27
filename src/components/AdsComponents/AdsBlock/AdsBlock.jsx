import PropTypes from 'prop-types';
import Card from '../../Card/PetCard/Card';
import styles from './styles.module.css';
function AdsBlock({ ads }) {
  console.log(ads);
  return (
    <div className={styles.conteiner}>
      {ads.map((ad, ind) => (
        <Card key={ind} ad={ad} />
      ))}
    </div>
  );
}

AdsBlock.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      adAttributes: PropTypes.arrayOf(PropTypes.object),
      thumbnail: PropTypes.shape({
        id: PropTypes.number,
      }),
    })
  ),
};

export default AdsBlock;
