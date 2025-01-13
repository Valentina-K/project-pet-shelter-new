import PropTypes from 'prop-types';
import BlogCard from '../../Card/BlogCard/BlogCard';
import { useEffect, useState } from 'react';
import NavControls from '../NavControls/NavControls';
import styles from './OurBlog.module.css';

function BlogSlider({ blogs, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const handleClicked = (ind) => {
    setCurrentIndex(ind);
  };

  const handleComtrolClick = (margin, index) => {
    setMarginLeft(margin);
    setCurrentIndex(index);
  };
  useEffect(() => {
    onClick(currentIndex);
  }, [currentIndex, onClick]);
  return (
    <div className={styles.blogSlider}>
      <div className={styles.list} style={{ marginLeft: `${marginLeft}px` }}>
        {blogs.slice(1).map((blog, ind) => (
          <div key={ind} onClick={() => handleClicked(ind)}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <NavControls
        currentIndex={currentIndex}
        countVisibleItems={3}
        countAllItems={blogs.length - 1}
        onNavClick={handleComtrolClick}
        componentSlyle={{ marginRight: `${marginLeft}` }}
      />
    </div>
  );
}

BlogSlider.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape()),
  onClick: PropTypes.func,
};

export default BlogSlider;
