import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './Statistics.module.css';
import { useState } from 'react';
import { useWindowWidth } from '../../../hooks/index.js';

function Statistics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };
  /* const textRef = useRef(null);
  const widthScreen = useWindowWidth();  

  useEffect(() => {
    const element = textRef.current;
    const textHeight = widthScreen < 1280 ? 259 : widthScreen < 1920 ? 339 : 271;
    const elementHeight = textHeight - element.clientHeight;
    console.log(elementHeight, element.clientHeight);
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
  }, [widthScreen]); */
  return (
    <Section className={styles.statisticsSection}>
      <SectionTitle text="Statistics" />
      <h3 className={styles.subTitle}>
        Our Shelter – Your Chance to Make a Difference!
      </h3>
      <div className={styles.textContainer}>
        <p
          className={`${styles.textWrapper} ${
            isExpanded ? styles.expanded : ''
          }`}
        >
          We are proud to share the significant results we have achieved thanks
          to your unwavering support and compassion. This week alone, we&apos;ve
          received 12,924 donations—each one a powerful testament to your belief
          in our mission. These contributions directly help us provide food,
          shelter, medical care, and rehabilitation for animals in need, giving
          them a second chance at life. Our dedicated team of 5,200 volunteers
          forms the backbone of our organization, with 467 of them actively
          working every day to care for animals, manage rescues,
          <br /> assist with adoptions, and provide emotional comfort to those
          who have suffered neglect or abuse.
          <br /> In addition to this, we are proud to collaborate with 78
          trusted partner shelters across the country. These partnerships allow
          us to broaden our impact, share resources, and respond faster to
          emergencies and overcrowding situations. Every act of kindness helps
          transform lives.
          <br /> Join our growing community and be part of a powerful movement
          making real change.
        </p>
        {isMobile && !isExpanded && (
          <span className={styles.ellipsis}>
            …
            <span onClick={toggleText} className={styles.toggleLink}>
              More
            </span>
          </span>
        )}
        {isMobile && isExpanded && (
          <span
            onClick={toggleText}
            className={`${styles.toggleLink} ${styles.ellipsis}`}
          >
            Hide
          </span>
        )}
      </div>
      <div className={styles.statisticsWrapper}>
        <div className={`${styles.statisticsItem} ${styles.hide}`}>
          <h5>Animal</h5>
          <p>12,924</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>Active Volunteers</h5>
          <p>467</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>Partner Shelters</h5>
          <p>78</p>
        </div>
      </div>
    </Section>
  );
}

export default Statistics;
