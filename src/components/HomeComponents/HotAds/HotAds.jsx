import PropTypes from 'prop-types';
import Card from '../../Card/HotCard/Card';
import data from '../../../models/shelters.json';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavControls from '../NavControls/NavControls';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './HotAds.module.css';

function HotAds({ ads = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const handleComtrolClick = (margin, index) => {
    setMarginLeft(margin);
    setCurrentIndex(index);
  };

  return (
    <Section>
      <SectionTitle text="Hot ads" />
      <div className={styles.wrapper}>
        <div
          className={styles.list}
          style={{
            marginLeft: `${marginLeft}px`,
          }}
        >
          {ads.length === 0 ? (
            <p>No hot ads available.</p>
          ) : (
            ads.map((card) => (
              <div className={styles.item} key={card.id}>
                <Card ad={card} />
              </div>
            ))
          )}
        </div>
        <NavControls
          currentIndex={currentIndex}
          countVisibleItems={5}
          countAllItems={data.shelters.length - 1}
          onNavClick={handleComtrolClick}
        />
        <NavLink to="/shelters" className={styles.toAllShelters}>
          View all
        </NavLink>
      </div>
    </Section>
  );
}

HotAds.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object),
};

export default HotAds;
