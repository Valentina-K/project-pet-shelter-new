import { MdChevronRight } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BlogCard.module.css';

function BlogCard({ blog }) {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    const titleElement = titleRef.current;
    const elementHeight = 96 - titleElement.clientHeight;
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
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContent}>
        <p className={styles.label}>{blog.author.name}</p>
        <h3 ref={titleRef} className={styles.cardTitle}>
          {blog.title}
        </h3>
        <p ref={textRef} className={styles.cardText}>
          {blog.content}
        </p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.footerDate}>{blog.updatedAt}</span>
        <Link to={`/blog/${blog.id}`}>
          <button className={styles.footerButton}>
            More
            <MdChevronRight className={styles.footerIcon} />
          </button>
        </Link>
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
    updatedAt: PropTypes.string,
  }),
};

export default BlogCard;
