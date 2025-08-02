import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSearchAdvertisements } from '../../../redux/advertisements/operations';
import Card from '../../Card/HotCard/Card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import NavControls from '../NavControls/NavControls';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import { useWindowWidth } from '../../../hooks';
import styles from './HotAds.module.css';

function HotAds() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [hotAds, setHotAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(2);
  const dispatch = useDispatch();
  const widthScreen = useWindowWidth();

  useEffect(() => {
    const filter = { isHot: true };
    dispatch(fetchSearchAdvertisements({ page: 0, size: 15, query: filter }))
      .then((response) => {
        setHotAds(response.payload.page.content);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    if (widthScreen < 768) {
      setVisibleItems(2);
    } else if (widthScreen < 1920) {
      setVisibleItems(3);
    } else setVisibleItems(4);
  }, [dispatch, widthScreen]);

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
            hotAds.map((card) => (
              <div className={styles.item} key={card.id}>
                <Card ad={card} />
              </div>
            ))}
        </div>
        <NavControls
          currentIndex={currentIndex}
          countVisibleItems={visibleItems}
          countAllItems={hotAds.length}
          onNavClick={handleComtrolClick}
          typeCard={'hot'}
        />
        <NavLink to="/animals" className={styles.toAllShelters}>
          View all
        </NavLink>
      </div>
    </Section>
  );
}

export default HotAds;
