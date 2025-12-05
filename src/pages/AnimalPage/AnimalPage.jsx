import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import Container from '../../layout/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdvertisements,
  selectTopAdvertisements,
} from '../../redux/advertisements/selectors';
import { useState, useEffect } from 'react';
import OwnerDropDown from '../../components/AdsComponents/OwnerDropDown/OwnerDropDown.jsx';
import { getUserById } from '../../redux/auth/operations.js';
import { selectIsLoading } from '../../redux/advertisements/selectors.js';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import PetPhotoSlider from '../../components/PetPhotoSlider/PetPhotoSlider.jsx';
import images from '../../models/images.json';
import AnimalInfoBlock from '../../components/AdsComponents/AnimalInfoBlock/AnimalInfoBlock.jsx';
import Section from '../../layout/Section/Section.jsx';
import Loader from '../../components/Loader/Loader.jsx';
function AnimalPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allAds = useSelector(selectAdvertisements);
  const IsLoading = useSelector(selectIsLoading);

  const ad = allAds.find((item) => item.id === Number(id));
  const [user, setUser] = useState(null);
  console.log('ad', allAds);
  useEffect(() => {
    async function fetchUser() {
      if (!IsLoading) {
        const userId = allAds.find((ad) => ad.id === Number(id))?.authorId;
        if (userId) {
          try {
            const result = dispatch(getUserById(userId));
            setUser(result.payload);
          } catch (error) {
            console.error('Failed to fetch user:', error);
          }
        }
      }
    }
    fetchUser();
  }, [dispatch, id, IsLoading, allAds]);
  console.log(images);

  const ads = useSelector(selectTopAdvertisements);
  console.log('ads', ads);
  const animalInfo = {
    pet_name: ad.adAttributes[7].value,
    age: ad.adAttributes[1].value,
    size: ad.adAttributes[2].value,
    gender: ad.adAttributes[3].value,
    description: ad.description,
  };

  if (IsLoading) return <Loader />;

  return (
    <Container>
      <PageWrapper>
        <div className={styles.wrapper}>
          <Section>
            <div className={styles.infoBlock}>
              <PetPhotoSlider photos={images.photos} />
              <AnimalInfoBlock animal={animalInfo} />
            </div>
          </Section>
          {user && <OwnerDropDown user={user} />}
          <Section>
            <AdsBlock ads={ads} />
          </Section>
        </div>
      </PageWrapper>
    </Container>
  );
}

export default AnimalPage;
