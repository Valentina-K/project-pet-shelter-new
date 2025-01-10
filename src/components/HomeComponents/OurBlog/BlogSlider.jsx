import data from '../../../models/blog';
import BlogCard from '../../Card/BlogCard/BlogCard';
//import styles from './OurBlog.module.css';

function BlogSlider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {data.blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogSlider;
