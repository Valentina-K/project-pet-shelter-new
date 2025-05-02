import PropTypes from 'prop-types';
import BlogCard from '../../Card/BlogCard/BlogCard';
import { useWindowWidth } from '../../../hooks';
import styles from './OurBlog.module.css';

function BlogSlider({ blogs, margin }) {
  const style =
    useWindowWidth() >= 1920
      ? { marginLeft: `${margin}px` }
      : { marginTop: `${margin}px` };
  return (
    <div className={styles.blogSlider}>
      <div className={styles.list} style={style}>
        {blogs.slice(1).map((blog, ind) => (
          <div key={ind}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

BlogSlider.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape()),
  margin: PropTypes.number,
};

export default BlogSlider;
