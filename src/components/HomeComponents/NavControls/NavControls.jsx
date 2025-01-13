import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from './NavControls.module.css';

function NavControls({
  currentIndex,
  countVisibleItems,
  countAllItems,
  onNavClick,
  componentSlyle,
}) {
  const [index, setIndex] = useState(currentIndex);
  const [leftDisabled, setLeftDisabled] = useState(false);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [marginLeft, setMarginLeft] = useState(0);
  const [position, setPosition] = useState(0);
  const width = 405;
  const count = countVisibleItems;
  useEffect(() => {
    if (index === 0) {
      setLeftDisabled(true);
    } else setLeftDisabled(false);
    if (index === countAllItems - countVisibleItems) {
      setRightDisabled(true);
    } else setRightDisabled(false);
    setMarginLeft(Math.max(position, -width * (countAllItems - count)));
    onNavClick(marginLeft, index);
  }, [
    index,
    countAllItems,
    countVisibleItems,
    position,
    width,
    count,
    onNavClick,
    marginLeft,
  ]);
  const handleLeftClick = () => {
    setPosition((prev) => prev + width);
    setIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    setPosition((prev) => prev - width);
    setIndex((prev) => prev + 1);
  };
  return (
    <div className={styles.controls} style={componentSlyle}>
      <button onClick={handleLeftClick} disabled={leftDisabled}>
        <MdChevronLeft className={styles.icon} />
      </button>
      <button onClick={handleRightClick} disabled={rightDisabled}>
        <MdChevronRight className={styles.icon} />
      </button>
    </div>
  );
}

NavControls.propTypes = {
  currentIndex: PropTypes.number,
  countVisibleItems: PropTypes.number,
  countAllItems: PropTypes.number,
  onNavClick: PropTypes.func,
  componentSlyle: PropTypes.shape(),
};

export default NavControls;
