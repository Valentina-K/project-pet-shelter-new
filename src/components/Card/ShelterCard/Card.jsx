import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import SocialLinks from '../../SocialLinks/SocialLinks';
import Rating from '../../Rating/Rating';
import FollowMeButton from '../../UI/FollowMeButton';
import { useMediaQuery, useTextClamp } from '../../../hooks';
import styles from './Card.module.css';
import generic from '../styles.module.css';

function Card({ shelter }) {
  const { id } = shelter;
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLaptop = useMediaQuery('(min-width: 1280px)');
  const isDesktop = useMediaQuery('(min-width: 1920px)');
  const textHeight = isDesktop ? 100 : isLaptop ? 103 : isTablet ? 51 : 28;
  const textRef = useTextClamp({ maxHeight: textHeight });
  const titleHeight = isDesktop || isLaptop ? 31 : isTablet ? 24 : 19;
  const titleRef = useTextClamp({ maxHeight: titleHeight, ellipsis: '' });

  return (
    <div className={`${generic.cardWrapper} ${styles.cardWrapper}`}>
      <div className={styles.imgWrapper}>
        <img src={shelter.logo} alt="logo" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.lacation}>
          <GoLocation className={styles.locationIcon} />
          <span>{shelter.address.city}, </span>
          <span>{shelter.address.country}</span>
        </div>
        <h2 ref={titleRef} className={styles.title}>
          {shelter.name}
        </h2>
        <Rating rating={shelter.rating} />
        <div ref={textRef} className={styles.description}>
          {shelter.description}
        </div>
        <div className={styles.socialBlock}>
          <SocialLinks addStyle="card" />
          <Link to={`/shelter/${id}`}>
            <FollowMeButton />
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  shelter: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    rating: PropTypes.string,
    animals: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, count: PropTypes.string })
    ),
    description: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

export default Card;
