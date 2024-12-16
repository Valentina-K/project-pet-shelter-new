import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import { IoEyeOutline } from 'react-icons/io5';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../../redux/photos/selectors';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import defImg from '../../assets/img/404-error-web-template-with-cute-dog_23-2147763341.jpg';
import styles from './Card.module.css';

function Card({ ad }) {
  const dispatch = useDispatch();
  const [petName, setPetName] = useState('');
  const [year, setYear] = useState('');
  const [petGender, setPetGender] = useState('');
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const adId = ad.id;
  const thumbnailId = ad.thumbnail ? ad.thumbnail.id : null;

  useEffect(() => {
    if (ad.adAttributes && Array.isArray(ad.adAttributes)) {
      setPetGender(ad.adAttributes[3]?.value?.toLowerCase() || 'unknown');
      setPetName(ad.adAttributes[7]?.value || 'Unnamed Pet');
      setYear(ad.adAttributes[1]?.value || 'Unknown Year');
    }
  }, [adId, thumbnailId, ad, dispatch]);

  if (error) return <p>Error: {error.message || 'An error occurred'}</p>;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        <img src={defImg} alt={petName} className={styles.adPhoto} />
        <IconContext.Provider value={{ style: { width: '32', height: '32' } }}>
          {isLogged && (
            <div className={styles.favorite}>
              <FaRegHeart />
            </div>
          )}
          <div className={styles.gender}>
            {petGender === 'male' ? <TbGenderDemiboy /> : <TbGenderDemigirl />}
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.infoTitle}>
          {petName} {year}
        </h3>
        <p className={styles.description}>{ad.description}</p>
        <div className={styles.linkBlock}>
          <NavLink to="/" className={styles.linkWrapper}>
            <IoEyeOutline />
            Meet
          </NavLink>
          <NavLink to="/" className={styles.linkWrapper}>
            <BsArrowRightCircle />
            owner
          </NavLink>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    adAttributes: PropTypes.arrayOf(PropTypes.object),
    thumbnail: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default Card;
