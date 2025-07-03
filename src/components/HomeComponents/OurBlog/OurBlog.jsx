import BlogSlider from './BlogSlider';
import data from '../../../models/blog';
import styles from './OurBlog.module.css';
import PreviewBlog from './PreviewBlog';
import { useState } from 'react';
import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import NavControls from '../NavControls/NavControls.jsx';
import { useWindowWidth } from '../../../hooks/index.js';

function OurBlog() {
  const [index, setIndex] = useState(0);
  const [margin, setMargin] = useState(0);
  const widthScreen = useWindowWidth();
  const countVisibleItems =
    widthScreen >= 1920 ? 3 : widthScreen >= 768 ? 2 : 1;

  const handleClick = (margin, currentIndex) => {
    console.log('currentIndex', currentIndex);
    console.log('currentMargin', margin);
    setIndex(currentIndex);
    setMargin(margin);
  };
  return (
    <Section>
      <SectionTitle text="Our Blog" />
      <div className={styles.wrapper}>
        <div className={styles.sliderContainer}>
          <PreviewBlog blog={data.blogs[index]} />
          <BlogSlider blogs={data.blogs} margin={margin} />
        </div>
        <NavControls
          currentIndex={index}
          countVisibleItems={countVisibleItems}
          countAllItems={data.blogs.length}
          onNavClick={handleClick}
        />
      </div>
    </Section>
  );
}

export default OurBlog;
