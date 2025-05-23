import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from './NavControls.module.css';
import { useMediaQuery } from '../../../hooks';

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
  // const [marginTop, setMarginTop] = useState(0);
  const [position, setPosition] = useState(0);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLaptop = useMediaQuery('(min-width: 1280px)');
  const isDesktop = useMediaQuery('(min-width: 1920px)');
  // added gap = 20px to width and height
  const width = isDesktop ? 405 : isLaptop ? 327 : isTablet ? 238 : 193;
  // const height = useMediaQuery('(min-width: 1280px)') ? 220 : 0;
  const count = countVisibleItems;

  useEffect(() => {
    if (index === 0) {
      setLeftDisabled(true);
    } else setLeftDisabled(false);
    if (index === countAllItems - countVisibleItems) {
      setRightDisabled(true);
    } else setRightDisabled(false);
    /* if (isDesktop) {
      setMarginLeft(Math.max(position, -width * (countAllItems - count)));
      onNavClick(marginLeft, index);
    } else {
      setMarginTop(Math.max(position, -height * (countAllItems - count)));
      onNavClick(marginTop, index);
    } */
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
    /* if (isDesktop) {
      setPosition((prev) => prev + width);
    } else {
      setPosition((prev) => prev + height);
    } */
    setPosition((prev) => prev + width);
    setIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    /* if (isDesktop) {
      setPosition((prev) => prev - width);
    } else {
      setPosition((prev) => prev - height);
    } */
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
