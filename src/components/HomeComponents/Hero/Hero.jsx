import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../UI/Button.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './Hero.module.css';

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Section>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>
            <span>{t('home.hero.find')} </span>
            {t('home.hero.your-new')}{' '}
            <span className={styles.bigText}>{t('home.hero.friend')}</span>
          </span>
          <br />
          {t('home.hero.give-them')}
        </h1>
        <Button
          className={styles.heroButton}
          onClick={() => navigate('/animals')}
        >
          {t('home.hero.adopt-a-friend')}
        </Button>
      </div>
    </Section>
  );
}

export default Hero;
