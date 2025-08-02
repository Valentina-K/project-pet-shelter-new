import SectionTitle from '../../UI/SectionTitle.jsx';
import Section from '../../../layout/Section/Section.jsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowWidth } from '../../../hooks/index.js';
import styles from './Statistics.module.css';

function Statistics() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Section className={styles.statisticsSection}>
      <SectionTitle text={t('home.titles.statistics')} />
      <h3 className={styles.subTitle}>{t('home.titles.statistics-h3')}</h3>
      <div className={styles.textContainer}>
        <p
          className={`${styles.textWrapper} ${
            isExpanded ? styles.expanded : ''
          }`}
        >
          {t('home.statistics-p-part1')}
          <br /> {t('home.statistics-p-part2')}
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
          <h5>{t('home.statisics-item1')}</h5>
          <p>12,924</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>{t('home.statisics-item2')}</h5>
          <p>467</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>{t('home.statisics-item3')}</h5>
          <p>78</p>
        </div>
      </div>
    </Section>
  );
}

export default Statistics;

/* className={styles.statisticsSection} */
