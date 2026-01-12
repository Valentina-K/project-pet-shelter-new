import PropTypes from 'prop-types';
import Card from '../../Card/ShelterCard/Card';
import data from '../../../models/shelters.json';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavControls from '../NavControls/NavControls';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './Shelters.module.css';
import { useWindowWidth } from '../../../hooks/index.js';

function Shelters() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const widthScreen = useWindowWidth();

  const handleComtrolClick = (margin, index) => {
    setMarginLeft(margin);
    setCurrentIndex(index);
  };

  useEffect(() => {
    /*  const filter = { isHot: true };
      dispatch(fetchSearchAdvertisements({ page: 0, size: 15, query: filter }))
        .then((response) => {
          console.log(response.payload.page.content);
          setHotAds(response.payload.page.content);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        }); */
    if (widthScreen < 768) {
      setVisibleItems(2);
    } else if (widthScreen < 1920) {
      setVisibleItems(3);
    } else setVisibleItems(4);
  }, [widthScreen]);

  return (
    <Section>
      <SectionTitle text={t('home.titles.shelters')} />
      <div className={styles.wrapper}>
        <div
          className={styles.list}
          style={{
            marginLeft: `${marginLeft}px`,
          }}
        >
          {data.shelters.map((shelter) => (
            <div key={shelter.id}>
              <Card shelter={shelter} />
            </div>
          ))}
        </div>
        <NavControls
          currentIndex={currentIndex}
          countVisibleItems={visibleItems}
          countAllItems={data.shelters.length}
          onNavClick={handleComtrolClick}
          typeCard={'shelter'}
        />
        <NavLink to="/shelters" className={styles.toAllShelters}>
          {t('home.view-all')}
        </NavLink>
      </div>
    </Section>
  );
}

Shelters.propTypes = {
  shelters: PropTypes.arrayOf(PropTypes.object),
};

export default Shelters;
