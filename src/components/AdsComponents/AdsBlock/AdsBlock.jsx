import { useSelector } from 'react';
import Card from '../../Card/PetCard/Card';
import { selectTopAdvertsments } from '../../../redux/advertisements/selectors';
import styles from './styles.module.css';
function AdsBlock() {
  const ads = useSelector(selectTopAdvertsments);
  return (
    <div className={styles.conteiner}>
      {ads.map((ad, ind) => (
        <Card key={ind} ad={ad} />
      ))}
    </div>
  );
}

export default AdsBlock;
