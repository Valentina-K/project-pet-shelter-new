import { MdChevronRight } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blogcat from '../../../assets/img/blogcat.png';
import monthNames from '../../../constants/month';
import styles from './BlogCard.module.css';
import { useMediaQuery } from '../../../hooks';

function BlogCard({ blog }) {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLaptop = useMediaQuery('(min-width: 1280px)');
  const isDesktop = useMediaQuery('(min-width: 1920px)');
  // added gap = 20px or other value to width
  const textHeight = isDesktop ? 110 : isLaptop ? 100 : isTablet ? 90 : 96;
  const d = new Date(blog.publisedDate);
  const month = monthNames.en[d.getMonth()];
  const year = d.getFullYear();
  const formattedDate = `${month}, ${year}`;
  useEffect(() => {
    const element = textRef.current;
    const titleElement = titleRef.current;
    const elementHeight = textHeight - titleElement.clientHeight;
    if (element) {
      const { clientHeight } = element;
      if (elementHeight < clientHeight) {
        let textContent = element.textContent;
        while (elementHeight < element.clientHeight) {
          textContent = textContent.slice(0, -1);
          element.textContent = textContent + '...';
        }
      }
    }
  }, [textHeight]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={blogcat} alt="cat" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.mainInfo}>
          <p className={styles.label}>{blog.author.name}</p>
          <h3 ref={titleRef} className={styles.cardTitle}>
            {blog.title}
          </h3>
          <p ref={textRef} className={styles.cardText}>
            {blog.content}
          </p>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.footerDate}>{formattedDate}</span>
          <Link to={`/blog/${blog.id}`}>
            <button className={styles.footerButton}>
              More
              <MdChevronRight className={styles.footerIcon} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    title: PropTypes.string,
    content: PropTypes.string,
    publisedDate: PropTypes.string,
  }),
};

export default BlogCard;
