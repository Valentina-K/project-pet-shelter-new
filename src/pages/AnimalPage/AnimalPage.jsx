import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import Container from '../../layout/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTopAdvertisements,
  selectOneAdvertisement,
  selectError,
} from '../../redux/advertisements/selectors';
import { useState, useEffect } from 'react';
import OwnerDropDown from '../../components/AdsComponents/OwnerDropDown/OwnerDropDown.jsx';
import { getUserById } from '../../redux/auth/operations.js';
import { selectIsLoading } from '../../redux/advertisements/selectors.js';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';
import images from '../../models/images.json';
import AnimalInfoBlock from '../../components/AdsComponents/AnimalInfoBlock/AnimalInfoBlock.jsx';
import Section from '../../layout/Section/Section.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import GoBack from '../../components/UI/GoBack/GoBack.jsx';
import {
  fetchAdvertisementById,
  getAllAds,
} from '../../redux/advertisements/operations.js';

function AnimalPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const adv = useSelector(selectOneAdvertisement);
  const IsLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const ads = useSelector(selectTopAdvertisements);

  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    dispatch(fetchAdvertisementById(id));
    dispatch(getAllAds({ size: 4, page: 0 }));
  }, [id, dispatch]);

  useEffect(() => {
    async function fetchUser() {
      if (!IsLoading) {
        const userId = adv.authorId;
        if (userId) {
          try {
            const result = await dispatch(getUserById(userId));
            setUser(result.payload);
          } catch (error) {
            console.error('Failed to fetch user:', error);
          }
        }
      }
    }
    fetchUser();
  }, [dispatch, IsLoading, adv]);

  const animalInfo = {
    pet_name: adv?.adAttributes[7].value,
    age: adv?.adAttributes[1].value,
    size: adv?.adAttributes[2].value,
    gender: adv?.adAttributes[3].value,
    description: adv?.description,
    photos: images.photos,
  };

  if (IsLoading) return <Loader />;
  if (error) return <p>Error</p>;
  if (!adv) return <Loader />;

  return (
    <Container>
      <PageWrapper>
        <div className={styles.wrapper}>
          <GoBack text={t('goback-animal')} path={'/animals/'} />
          <Section>
            <AnimalInfoBlock animal={animalInfo} />
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
