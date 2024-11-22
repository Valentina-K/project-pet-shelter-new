import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { PiCaretDoubleRightFill, PiCaretDoubleLeftFill } from 'react-icons/pi';
import styles from './Pagination.module.css';
import { IconContext } from 'react-icons';

function Pagination({ current, totalPage, onPageClick }) {
  const [currentPage, setCurrentPage] = useState(current);
  const [numbers, setNumbers] = useState([]);

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
    if (totalPage <= 5)
      setNumbers(
        Array(totalPage)
          .fill()
          .map((_, index) => index + 1)
      );
    else if (currentPage === 1 || currentPage === 2)
      setNumbers([1, 2, 3, '...', totalPage]);
    else if (currentPage === totalPage - 1 || currentPage === totalPage)
      setNumbers([1, '...', totalPage - 2, totalPage - 1, totalPage]);
    else if (currentPage === 3) setNumbers([1, 2, 3, 4, '...', totalPage]);
    else if (currentPage === totalPage - 2)
      setNumbers([
        1,
        '...',
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ]);
    else
      setNumbers([
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPage,
      ]);
    onPageClick(currentPage);
  }, [currentPage, totalPage, onPageClick]);

  return (
    <nav className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        {totalPage > 5 && (
          <div className={styles.pageItem}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(1)}
            >
              <IconContext.Provider
                value={{ style: { width: '22', height: '24' } }}
              >
                <PiCaretDoubleLeftFill />
              </IconContext.Provider>
            </a>
          </div>
        )}
        <div className={styles.pageItem}>
          <a href="#" className={styles.pageLink} onClick={prevPage}>
            <IconContext.Provider
              value={{ style: { width: '14', height: '24' } }}
            >
              <SlArrowLeft />
            </IconContext.Provider>
          </a>
        </div>
        <div className={styles.numberWrapper}>
          {numbers.map((num, ind) => {
            if (num === currentPage)
              return (
                <div
                  className={`${styles.pageItem} ${styles.active}`}
                  key={ind}
                >
                  <a
                    href="#"
                    className={styles.pageLink}
                    onClick={() => changePage(num)}
                  >
                    {num}
                  </a>
                </div>
              );
            else
              return (
                <div className={`${styles.pageItem}`} key={ind}>
                  <a
                    href="#"
                    className={styles.pageLink}
                    onClick={() => changePage(num)}
                  >
                    {num}
                  </a>
                </div>
              );
          })}
        </div>
        <div className={styles.pageItem}>
          <a href="#" className={styles.pageLink} onClick={nextPage}>
            <IconContext.Provider
              value={{ style: { width: '14', height: '24' } }}
            >
              <SlArrowRight />
            </IconContext.Provider>
          </a>
        </div>
        {totalPage > 5 && (
          <div className={styles.pageItem}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => changePage(totalPage)}
            >
              <IconContext.Provider
                value={{ style: { width: '22', height: '24' } }}
              >
                <PiCaretDoubleRightFill />
              </IconContext.Provider>
            </a>
          </div>
        )}
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
