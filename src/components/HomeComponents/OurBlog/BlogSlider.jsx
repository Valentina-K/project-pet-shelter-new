import PropTypes from 'prop-types';
import BlogCard from '../../Card/BlogCard/BlogCard';
import { useWindowWidth } from '../../../hooks';
import styles from './OurBlog.module.css';

function BlogSlider({ blogs, margin }) {
  const style = { marginLeft: `${margin}px` };
  const widthScreen = useWindowWidth();
  const index = widthScreen >= 1920 ? 1 : 0;
  console.log(blogs.length, index, widthScreen);
  return (
    <div className={styles.blogSlider}>
      <div className={styles.list} style={style}>
        {blogs.slice(index).map((blog, ind) => (
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
