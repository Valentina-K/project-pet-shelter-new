import BlogSlider from './BlogSlider';
import data from '../../../models/blog';
import styles from './OurBlog.module.css';
import PreviewBlog from './PreviewBlog';
import { useState } from 'react';
import SectionTitle from '../../UI/SectionTitle.jsx';

function OurBlog() {
  const [index, setIndex] = useState(0);
  const handleClick = (currentIndex) => {
    setIndex(currentIndex);
  };
  return (
    <>
      <SectionTitle text="Our Blog" />
      <div className={styles.wrapper}>
        <PreviewBlog blog={data.blogs[index]} />
        <BlogSlider blogs={data.blogs} onClick={handleClick} />
      </div>
    </>
  );
}

export default OurBlog;
