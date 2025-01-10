import PropTypes from 'prop-types';
import Card from '../../Card/ShelterCard/Card';
import data from '../../../models/shelters.json';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from './Shelters.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Shelters() {
  const [index, setIndex] = useState(0);
  const [leftDisabled, setLeftDisabled] = useState(false);
  const [rightDisabled, setRightDisabled] = useState(false);

  const [position, setPosition] = useState(0);
  const width = 405;
  const count = 5;
  useEffect(() => {
    if (index === 0) {
      setLeftDisabled(true);
    } else setLeftDisabled(false);
    if (index === data.shelters.length - 5) {
      setRightDisabled(true);
    } else setRightDisabled(false);
  }, [index]);

  const handleLeftClick = () => {
    setPosition((prev) => prev + width);
    setIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    setPosition((prev) => prev - width);
    setIndex((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.list}
        style={{
          marginLeft: `${Math.max(position, -width * (data.shelters.length - count))}px`,
        }}
      >
        {data.shelters.map((shelter) => (
          <div key={shelter.id}>
            <Card shelter={shelter} />
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={handleLeftClick} disabled={leftDisabled}>
          <MdChevronLeft className={styles.icon} />
        </button>
        <button onClick={handleRightClick} disabled={rightDisabled}>
          <MdChevronRight className={styles.icon} />
        </button>
      </div>
      <NavLink to="/shelters" className={styles.toAllShelters}>
        View all
      </NavLink>
    </div>
  );
}

Shelters.propTypes = {
  shelters: PropTypes.arrayOf(PropTypes.object),
};

export default Shelters;
