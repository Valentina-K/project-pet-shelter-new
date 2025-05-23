import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './Hero.module.css';

function Hero() {
  const navigate = useNavigate();
  return (
    <Section>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>
            Find <br />
            your new <span className={styles.bigText}>friend</span>
          </span>
          <br /> and give them a loving home
        </h1>
        <Button
          className={styles.heroButton}
          onClick={() => navigate('/animals')}
        >
          Adopt a friend
        </Button>
      </div>
    </Section>
  );
}

export default Hero;
