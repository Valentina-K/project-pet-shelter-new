import genericStyle from '../styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import fire from '../../../assets/img/firecracker.png';
import FollowMeButton from '../../UI/FollowMeButton';
import { getUserById } from '../../../redux/auth/operations';
import { selectIsLoading } from '../../../redux/advertisements/selectors';
import styles from './Card.module.css';

function Card({ ad }) {
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsLoading);
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      if (!IsLoading) {
        const userId = ad.authorId;
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
  }, [dispatch, ad, IsLoading]);
  return (
    <div className={genericStyle.cardWrapper}>
      <div className={styles.imgWrapper}>
        <img src={fire} alt="hot" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.lacation}>
          <GoLocation className={styles.locationIcon} />
          <span>{ad.location?.city}, </span>
          <span>{ad.location?.country}</span>
        </div>
        <h3 className={styles.title}>
          {user?.firstName} {user?.lastName ? user.lastName : ''}
        </h3>
        <p className={styles.text}>{ad.title}</p>
        <NavLink to={`/animal/${ad.id}`} className={styles.following}>
          <FollowMeButton />
        </NavLink>
      </div>
    </div>
  );
}

Card.propTypes = {
  ad: PropTypes.object.isRequired,
};

export default Card;
