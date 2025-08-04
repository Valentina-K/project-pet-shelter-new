import { useNavigate } from 'react-router';
import Button from '../../UI/Button.jsx';
import { useTranslation } from 'react-i18next';
import Section from '../../../layout/Section/Section.jsx';
import styles from './JoinUsSection.module.css';

function JoinUsSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleJoinUs = () => {
    navigate('/sign-in');
  };
  return (
    <Section>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t('home.join-us.description')}</h2>
        <Button className={styles.button} onClick={handleJoinUs}>
          {t('home.join-us.button')}
        </Button>
      </div>
    </Section>
  );
}

export default JoinUsSection;
