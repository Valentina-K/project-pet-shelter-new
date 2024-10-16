import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import { IoEyeOutline } from 'react-icons/io5';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertThumbnail } from '../../redux/photos/operations';
import { selectError } from '../../redux/photos/selectors';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Card.module.css';

function Card({ ad }) {
  const dispatch = useDispatch();
  const [petName, setPetName] = useState('');
  const [year, setYear] = useState('');
  const [petGender, setPetGender] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const adId = ad.id;
  const thumbnailId = ad.thumbnail ? ad.thumbnail.id : null;

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const url = await dispatch(
          getAdvertThumbnail({ adId, thumbnailId })
        ).unwrap();
        setPhotoUrl(url);
      } catch (error) {
        console.log('Failed to fetch thumbnail:', error);
        setPhotoUrl('https://dummyimage.com/337x300');
      }
    };
    fetchThumbnail();
    setPetGender(ad.adAttributes[3].value.toLowerCase());
    setPetName(ad.adAttributes[7].value);
    setYear(ad.adAttributes[1].value);
  }, [adId, thumbnailId, ad, dispatch]);

  if (error) return <p>Error: {error.message || 'An error occurred'}</p>;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        {photoUrl ? (
          <img src={photoUrl} alt={photoUrl} className={styles.adPhoto} />
        ) : (
          <p>No photo available</p>
        )}
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
