import styles from '../styles.module.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import fire from '../../../assets/img/firecracker.png';
import FollowMeButton from '../../UI/FollowMeButton';

function Card({ ad }) {
  return (
    <div className={styles.cardWrapper}>
      <NavLink to={`/animal/${ad.id}`}>
        <div className={styles.imgWrapper}>
          <img src={fire} alt="hot" />
        </div>
        <div className={styles.lacation}>
          <GoLocation className={styles.locationIcon} />
          <span>{ad.location?.city}, </span>
          <span>{ad.location?.country}</span>
        </div>
        <h3>{ad.title}</h3>
        <p>{ad.description}</p>
      </NavLink>
      <Link to={`/animal/${ad.id}`}>
        <FollowMeButton />
      </Link>
    </div>
  );
}

Card.propTypes = {
  ad: PropTypes.object.isRequired,
};

export default Card;
