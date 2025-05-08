import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import { useSelector } from 'react-redux';
import { selectTopAdvertisements } from '../../redux/advertisements/selectors';
import Container from '../../layout/Container/Container';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

function AnimalPage() {
  const { id } = useParams();
  const ads = useSelector(selectTopAdvertisements);
  console.log(id, ads);
  return (
    <Container>
      <PageWrapper>
        <div className={styles.wrapper}>
          <AdsBlock ads={ads} />
        </div>
      </PageWrapper>
    </Container>
  );

  ///drop-down
}

export default AnimalPage;
