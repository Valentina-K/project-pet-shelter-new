import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../../redux/photos/selectors';
//import { getUserById } from '../../../redux/auth/operations';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import defImg from '../../../assets/img/404-error-web-template-with-cute-dog_23-2147763341.jpg';
import { FaHouse } from 'react-icons/fa6';
import styles from './Card.module.css';
import generic from '../styles.module.css';
import { selectAuthorById } from '../../../redux/authors/selectors';
import { fetchUserById } from '../../../redux/authors/operations';

function Card({ ad }) {
  const dispatch = useDispatch();
  const petGender = ad.adAttributes?.[3]?.value?.toLowerCase() || 'unknown';
  const petName = ad.adAttributes?.[7]?.value || 'Unnamed';
  const year = ad.adAttributes?.[1]?.value || 'Unknown';
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const author = useSelector(selectAuthorById(ad.authorId));

  useEffect(() => {
    console.log('from Card', author);
    if (!author) {
      dispatch(fetchUserById(ad.authorId));
    }
  }, [ad.authorId, author, dispatch]);

  if (error) return <p>Error: {error.message || 'An error occurred'}</p>;

  return (
    <NavLink to={`/animal/${ad.id}`}>
      <div className={`${generic.cardWrapper} ${styles.cardWrapper}`}>
        <div className={styles.imgWrapper}>
          <img src={defImg} alt={petName} className={styles.adPhoto} />
          {isLogged && (
            <div className={styles.favorite}>
              <FaRegHeart />
            </div>
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.highterBlock}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.infoTitle}>
                {petName} {year}
              </h3>
              <div>
                {petGender === 'male' ? (
                  <TbGenderDemiboy className={styles.gender} />
                ) : (
                  <TbGenderDemigirl className={styles.gender} />
                )}
              </div>
            </div>
            <p className={styles.description}>{ad.description}</p>
          </div>
          <div className={styles.linkBlock}>
            <NavLink to="/" className={styles.linkWrapper}>
              <FaHouse />
              <span>
                {author?.firstName} {author?.lastName}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
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
