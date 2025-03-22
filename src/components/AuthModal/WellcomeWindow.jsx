import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { IoMdClose } from 'react-icons/io';
import succes from '../../assets/img/Success.png';
import styles from './AuthModal.module.css';

function WellcomeWindow({
  title,
  firstname,
  lastname,
  email,
  isRegistration,
  onCloseWindow,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.wellcomeWrapper}>
      <div className={styles.closeIcon} onClick={() => onCloseWindow(false)}>
        <IoMdClose className={styles.close} />
      </div>
      <h1 className={styles.wellcomeTitle}>{title}</h1>
      <div className={styles.wellcomeContainer}>
        <img src={succes} alt="success" />
        <div className={styles.wellcomeBlock}>
          <h3 className={styles.hello}>
            Hello, {firstname} {lastname}
          </h3>
          <p className={styles.email}>{email}</p>
          {isRegistration && (
            <p className={styles.gladtosee}>Glad to see you!</p>
          )}
        </div>
        <button
          className={styles.homeButton}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}

WellcomeWindow.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isRegistration: PropTypes.bool.isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};

export default WellcomeWindow;
