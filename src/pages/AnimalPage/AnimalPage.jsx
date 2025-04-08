import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdvertisements,
  selectTopAdvertisements,
} from '../../redux/advertisements/selectors';
import { useState, useEffect } from 'react';
import OwnerDropDown from '../../components/AdsComponents/OwnerDropDown/OwnerDropDown.jsx';
import { getUserById } from '../../redux/auth/operations.js';
import { selectIsLoading } from '../../redux/advertisements/selectors.js';

function AnimalPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsLoading);
  const allAds = useSelector(selectAdvertisements);
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      if (!IsLoading) {
        const userId = allAds.find((ad) => ad.id === Number(id))?.authorId;
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
  }, [dispatch, id, IsLoading, allAds]);

  /*const user = {
    phone: '22-33-56',
    email: 'fff@hh.com',
  }*/

  const ads = useSelector(selectTopAdvertisements);
  console.log(id, ads);
  return (
    <div className={styles.wrapper}>
      {' '}
      {user && (
        <OwnerDropDown
          contactInfo={user}
          name={'Vasya'}
          website={'jfjgkfj'}
          type={'user'}
        />
      )}{' '}
      <AdsBlock ads={ads} />
    </div>
  );

  ///drop-down
}

export default AnimalPage;
