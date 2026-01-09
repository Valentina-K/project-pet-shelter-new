import { useTranslation } from 'react-i18next';
import paw from '../../assets/img/paw.svg';
import styles from './Error.module.css';

function Error() {
  const { t } = useTranslation();
  const message = t('error');
  return (
    <div className={styles.blocks}>
      <p className={styles.message}>{message}</p>
      <div className={styles.pawContainer}>
        <img src={paw} className={`${styles.paw} ${styles.left}`} />
        <img src={paw} className={`${styles.paw} ${styles.right}`} />
      </div>
    </div>
  );
}

export default Error;
