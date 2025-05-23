import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../../redux/photos/selectors';
import { IconContext } from 'react-icons';
import { getUserById } from '../../../redux/auth/operations';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import defImg from '../../../assets/img/404-error-web-template-with-cute-dog_23-2147763341.jpg';
import styles from './Card.module.css';
import generic from '../styles.module.css';
import { FaHouse } from 'react-icons/fa6';

function Card({ ad }) {
  const dispatch = useDispatch();
  const [petName, setPetName] = useState('');
  const [user, setUser] = useState(null);
  const [year, setYear] = useState('');
  const [petGender, setPetGender] = useState('');
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);

  useEffect(() => {
    async function fetchUser() {
      console.log(ad.authorId);
      try {
        const result = await dispatch(getUserById(Number(ad.authorId)));
        setUser(result.payload);
        console.log(result.payload);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    }
    if (ad.adAttributes && Array.isArray(ad.adAttributes)) {
      setPetGender(ad.adAttributes[3]?.value?.toLowerCase() || 'unknown');
      setPetName(ad.adAttributes[7]?.value || 'Unnamed Pet');
      setYear(ad.adAttributes[1]?.value || 'Unknown Year');
    }
    fetchUser();
  }, [ad, dispatch]);

  if (error) return <p>Error: {error.message || 'An error occurred'}</p>;

  return (
    <div className={`${generic.cardWrapper} ${styles.cardWrapper}`}>
      <NavLink to={`/animal/${ad.id}`}>
        <div className={styles.imgWrapper}>
          <img src={defImg} alt={petName} className={styles.adPhoto} />
          <IconContext.Provider
            value={{ style: { width: '32', height: '32' } }}
          >
            {isLogged && (
              <div className={styles.favorite}>
                <FaRegHeart />
              </div>
            )}
          </IconContext.Provider>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.infoTitle}>
              {petName} {year}
            </h3>
            <div className={styles.gender}>
              {petGender === 'male' ? (
                <TbGenderDemiboy />
              ) : (
                <TbGenderDemigirl />
              )}
            </div>
          </div>
          <p className={styles.description}>{ad.description}</p>
          <div className={styles.linkBlock}>
            <NavLink to="/" className={styles.linkWrapper}>
              <FaHouse />
              <span>
                {user?.firstName} {user?.lastName}
              </span>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

Card.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number,
    authorId: PropTypes.number,
    description: PropTypes.string,
    adAttributes: PropTypes.arrayOf(PropTypes.object),
    thumbnail: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default Card;
