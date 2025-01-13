import BlogSlider from './BlogSlider';
import data from '../../../models/blog';
import styles from './OurBlog.module.css';
import PreviewBlog from './PreviewBlog';
import { useState } from 'react';

function OurBlog() {
  const [index, setIndex] = useState(0);
  const handleClick = (currentIndex) => {
    setIndex(currentIndex);
  };
  return (
    <>
      <h2 className="sectionTitle">Our Blog</h2>
      <div className={styles.wrapper}>
        <PreviewBlog blog={data.blogs[index]} />
        <BlogSlider blogs={data.blogs} onClick={handleClick} />
      </div>
    </>
  );
}

export default OurBlog;
