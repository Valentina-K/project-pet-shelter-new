import styles from './Hero.module.css';

function Hero() {
  return (
    <div>
      <h1 className={styles.heroTitle}>
        <span className={styles.highlight}>Find your new friend</span> and give
        them a loving home
      </h1>
      <button className={`${styles.button} ${styles.heroButton}`}>
        Adopt a friend
      </button>
    </div>
  );
}

export default Hero;
