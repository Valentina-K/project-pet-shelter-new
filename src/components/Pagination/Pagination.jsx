import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { PiCaretDoubleRightFill, PiCaretDoubleLeftFill } from 'react-icons/pi';
import styles from './Pagination.module.css';
import { IconContext } from 'react-icons';

function Pagination({ current, totalPage, onPageClick }) {
  const numbers = useMemo(() => {
    if (totalPage <= 5) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    if (current <= 2) return [1, 2, 3, '...', totalPage];
    if (current >= totalPage - 1)
      return [1, '...', totalPage - 2, totalPage - 1, totalPage];
    if (current === 3) return [1, 2, 3, 4, '...', totalPage];
    if (current === totalPage - 2)
      return [1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage];

    return [1, '...', current - 1, current, current + 1, '...', totalPage];
  }, [current, totalPage]);

  const goTo = (page) => {
    if (page >= 1 && page <= totalPage) onPageClick(page - 1);
  };

  return (
    <nav className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        {totalPage > 5 && (
          <div className={styles.pageItem}>
            <a href="#" className={styles.pageLink} onClick={() => goTo(1)}>
              <IconContext.Provider
                value={{ style: { width: '22', height: '24' } }}
              >
                <PiCaretDoubleLeftFill />
              </IconContext.Provider>
            </a>
          </div>
        )}

        <div className={styles.pageItem}>
          <a
            href="#"
            className={styles.pageLink}
            onClick={() => goTo(current - 1)}
          >
            <IconContext.Provider
              value={{ style: { width: '14', height: '24' } }}
            >
              <SlArrowLeft />
            </IconContext.Provider>
          </a>
        </div>

        <div className={styles.numberWrapper}>
          {numbers.map((num, index) => (
            <div
              className={`${styles.pageItem} ${num === current ? styles.active : ''}`}
              key={index}
            >
              <a
                href="#"
                className={styles.pageLink}
                onClick={() => num !== '...' && goTo(num)}
              >
                {num}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.pageItem}>
          <a
            href="#"
            className={styles.pageLink}
            onClick={() => goTo(current + 1)}
          >
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
              onClick={() => goTo(totalPage)}
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
