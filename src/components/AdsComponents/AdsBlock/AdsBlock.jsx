import PropTypes from 'prop-types';
import Card from '../../Card/PetCard/Card';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
function AdsBlock({ ads }) {
  const { t } = useTranslation();
  console.log(ads);
  return (
    <>
      <p className={styles.title}>{t('need-home')}</p>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {ads.map((ad, ind) => (
            <Card key={ind} ad={ad} />
          ))}
        </div>
        <NavLink to={`/animals/`} className={styles.viewAll}>
          {t('home.view-all')}
        </NavLink>
      </div>
    </>
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
