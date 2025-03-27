import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import { useSelector } from 'react-redux';
import { selectTopAdvertisements } from '../../redux/advertisements/selectors';

function AnimalPage() {
  const { id } = useParams();
  const ads = useSelector(selectTopAdvertisements);
  console.log(id, ads);
  return (
    <div className={styles.wrapper}>
      <AdsBlock ads={ads} />
    </div>
  );

  ///drop-down
}

export default AnimalPage;
