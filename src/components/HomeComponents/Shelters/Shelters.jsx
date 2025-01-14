import PropTypes from 'prop-types';
import Card from '../../Card/ShelterCard/Card';
import data from '../../../models/shelters.json';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavControls from '../NavControls/NavControls';
import styles from './Shelters.module.css';

function Shelters() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const handleComtrolClick = (margin, index) => {
    setMarginLeft(margin);
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="sectionTitle">Shelters</h2>
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
          countVisibleItems={5}
          countAllItems={data.shelters.length - 1}
          onNavClick={handleComtrolClick}
        />
        <NavLink to="/shelters" className={styles.toAllShelters}>
          View all
        </NavLink>
      </div>
    </>
  );
}

Shelters.propTypes = {
  shelters: PropTypes.arrayOf(PropTypes.object),
};

export default Shelters;
