import { MdChevronRight } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import blogcat from '../../../assets/img/blogcat.png';
import PropTypes from 'prop-types';
import styles from './OurBlog.module.css';
import monthNames from '../../../constants/month';

function PreviewBlog({ blog }) {
  const textRef = useRef(null);
  const height = 256;
  const d = new Date(blog.publisedDate);
  const month = monthNames.en[d.getMonth()];
  const year = d.getFullYear();
  const formattedDate = `${month}, ${year}`;
  useEffect(() => {
    const element = textRef.current;
    console.log('element', element);
    if (!element) return;

    const truncateText = () => {
      const elementHeight = height;
      if (element.clientHeight > elementHeight) {
        let textContent = element.textContent;
        while (element.clientHeight > elementHeight) {
          textContent = textContent.slice(0, -1);
          element.textContent = textContent + '...';
        }
      }
    };
    truncateText();

    const observer = new MutationObserver(truncateText);
    observer.observe(element, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [height]);
  return (
    <div className={styles.previewWrapper}>
      <img src={blogcat} alt="cat" className={styles.previewImg} />
      <div className={styles.previewContent}>
        <div className={styles.previewMainInfo}>
          <p className={styles.label}>{blog.author.name}</p>
          <h3 className={styles.blogTitle}>{blog.title}</h3>
          <p ref={textRef} className={styles.blogText}>
            {blog.content}
          </p>
        </div>
        <div className={styles.previewFooter}>
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

PreviewBlog.propTypes = {
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

export default PreviewBlog;
