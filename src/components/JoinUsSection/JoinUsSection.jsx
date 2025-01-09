import styles from './JoinUsSection.module.css';

function JoinUsSection() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Running a shelter? Join us to make a bigger impact together!
      </h2>
      <button className={styles.button}>Join us</button>
    </div>
  );
}

export default JoinUsSection;
