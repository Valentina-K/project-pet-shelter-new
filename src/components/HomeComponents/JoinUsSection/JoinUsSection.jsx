import Button from '../../UI/Button.jsx';
import styles from './JoinUsSection.module.css';

function JoinUsSection() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Join our team and change animals lives for
        <br />
        the better! Together we can do more!
      </h2>
      <Button className={styles.button}>Join us</Button>
    </div>
  );
}

export default JoinUsSection;
