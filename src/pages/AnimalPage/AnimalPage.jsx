import styles from './AnimalPage.module.css';
import { useParams } from 'react-router';
import AdsBlock from '../../components/AdsComponents/AdsBlock/AdsBlock';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthorId,
  selectTopAdvertisements,
} from '../../redux/advertisements/selectors';
import OwnerDropDown from '../../components/AdsComponents/OwnerDropDown/OwnerDropDown.jsx';
import { getUserById } from '../../redux/auth/operations.js';
import { setAuthorByAdId } from '../../redux/advertisements/slice.js';
function AnimalPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(setAuthorByAdId(id));
  const userId = useSelector(selectAuthorId);
  const user = dispatch(getUserById(userId));
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
