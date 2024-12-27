import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go';
import SocialLinks from '../../SocialLinks/SocialLinks';
import Rating from '../../Rating/Rating';
import styles from './Card.module.css';

function Card({ shelter }) {
  const { id } = shelter;
  return (
    <div className={styles.cardWrapper}>
      <NavLink to={`/shelter/${id}`} className={styles.cardLink}>
        <div className={styles.imgWrapper}>
          <img src={shelter.logo} alt="logo" />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.lacation}>
            <GoLocation className={styles.locationIcon} />
            <span>{shelter.address.city}, </span>
            <span>{shelter.address.country}</span>
          </div>
          <h2 className={styles.title}>{shelter.name}</h2>
          <Rating rating={shelter.rating} />
          <div className={styles.statistics}>
            {shelter.animals.map((animal) => (
              <div key={animal.name}>
                <span>{animal.name} </span>
                <span>{animal.count}</span>
              </div>
            ))}
          </div>
          <div className={styles.description}>{shelter.description}</div>
        </div>
      </NavLink>
      <div className={styles.socialBlock}>
        <SocialLinks addStyle="card" />
        <Link to={`/shelter/${id}`}>
          <FaCircleChevronRight className={styles.goSocial} />
        </Link>
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
    rating: PropTypes.number,
    animals: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        count: PropTypes.number,
      })
    ),
    description: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

export default Card;
