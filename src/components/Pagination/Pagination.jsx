import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import styles from './Pagination.module.css';

function Pagination({ current, totalPage, onPageClick }) {
  const [currentPage, setCurrentPage] = useState(current);
  const [numbers, setNumbers] = useState([
    currentPage,
    currentPage + 1,
    currentPage + 2,
    '...',
    totalPage,
  ]);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    //if currentPage=ads.length????
    const temp = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      '...',
      totalPage,
    ];
    setNumbers([...temp]);
    onPageClick(currentPage);
  }, [currentPage, totalPage, onPageClick]);

  return (
    <nav>
      <div className={styles.pagination}>
        <div className={styles.pageItem}>
          <a href="#" className={styles.pageLink} onClick={prevPage}>
            <SlArrowLeft />
          </a>
        </div>
        <div className={styles.numberWrapper}>
          <div className={`${styles.pageItem} ${styles.active}`}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(numbers[0])}
            >
              {numbers[0]}
            </a>
          </div>
          <div className={`${styles.pageItem}`}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(numbers[1])}
            >
              {numbers[1]}
            </a>
          </div>
          <div className={`${styles.pageItem}`}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(numbers[2])}
            >
              {numbers[2]}
            </a>
          </div>
          <div className={`${styles.pageItem}`}>
            <a href="#" className={styles.pageLink}>
              {numbers[3]}
            </a>
          </div>
          <div className={`${styles.pageItem}`}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(numbers[4])}
            >
              {numbers[4]}
            </a>
          </div>
        </div>
        <div className={styles.pageItem}>
          <a href="#" className={styles.pageLink} onClick={nextPage}>
            <SlArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;
