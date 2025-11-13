import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.blocks}>
      <div className={`${styles.block} ${styles.orange}`}></div>
      <div className={`${styles.block} ${styles.blue}`}></div>
    </div>
  );
}

export default Loader;
