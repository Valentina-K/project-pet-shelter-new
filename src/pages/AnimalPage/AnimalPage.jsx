import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';

function AnimalPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className={styles.wrapper}>
      <AdsBlock />
    </div>
  );

  ///drop-down
}

export default AnimalPage;
