import { MdChevronRight } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OurBlog.module.css';
function PreviewBlog({ blog }) {
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    const elementHeight = 256;
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
    <div className={styles.previewWrapper}>
      <img src="" alt="" className={styles.previewImg} />
      <div className={styles.previewContent}>
        <div>
          <p className={styles.label}>{blog.author.name}</p>
          <h3 className={styles.blogTitle}>{blog.title}</h3>
          <p ref={textRef} className={styles.blogText}>
            {blog.content}
          </p>
        </div>
        <div className={styles.previewFooter}>
          <span className={styles.footerDate}>{blog.updatedAt}</span>
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
    updatedAt: PropTypes.string,
  }),
};

export default PreviewBlog;
