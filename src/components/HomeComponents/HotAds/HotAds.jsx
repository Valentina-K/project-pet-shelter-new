import Card from '../../Card/HotCard/Card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import NavControls from '../NavControls/NavControls';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import { useWindowWidth } from '../../../hooks';
import styles from './HotAds.module.css';
import { useSelector } from 'react-redux';
import {
  selectAdvertisements,
  selectError,
  selectIsLoading,
} from '../../../redux/hotads/selectors.js';

function HotAds() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const widthScreen = useWindowWidth();

  const visibleItems = widthScreen < 768 ? 2 : widthScreen < 1920 ? 3 : 4;
  const hotads = useSelector(selectAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleComtrolClick = (margin, index) => {
    setMarginLeft(margin);
    setCurrentIndex(index);
  };
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Section>
      <SectionTitle text={t('home.titles.hot-ads')} />
      <div className={styles.wrapper}>
        <div
          className={styles.list}
          style={{
            marginLeft: `${marginLeft}px`,
          }}
        >
          {!isLoading &&
            hotads.map((card) => (
              <div className={styles.item} key={card.id}>
                <Card ad={card} />
              </div>
            ))}
        </div>
        <NavControls
          currentIndex={currentIndex}
          countVisibleItems={visibleItems}
          countAllItems={hotads.length}
          onNavClick={handleComtrolClick}
          typeCard={'hot'}
        />
        <NavLink to="/animals" className={styles.toAllShelters}>
          {t('home.view-all')}
        </NavLink>
      </div>
    </Section>
  );
}

export default HotAds;
