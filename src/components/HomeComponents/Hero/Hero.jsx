import Button from '../../UI/Button.jsx';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <h1 className={styles.heroTitle}>
        <span className={styles.highlight}>Find your new friend</span> and give
        them a loving home
      </h1>
      <Button className={styles.heroButton}>Adopt a friend</Button>
    </div>
  );
}

export default Hero;
