import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { IoMdClose } from 'react-icons/io';
import Button from '../UI/Button';
import succes from '../../assets/img/Success.png';
import warning from '../../assets/img/Warning.png';
import styles from './AuthModal.module.css';

function WellcomeRegisterWindow({ title, isRegistration, onCloseWindow }) {
  const navigate = useNavigate();
  return (
    <div className={styles.wellcomeWrapper}>
      <div className={styles.closeIcon} onClick={() => onCloseWindow(false)}>
        <IoMdClose className={styles.close} />
      </div>
      <h1 className={styles.wellcomeTitle}>{title}</h1>
      <div className={styles.wellcomeContainer}>
        <div className={styles.imageContainer}>
          {isRegistration ? (
            <img src={succes} alt="success" />
          ) : (
            <img src={warning} alt="warning" />
          )}
        </div>
        <div className={styles.wellcomeBlock}>
          {isRegistration ? (
            <p className={styles.gladtosee}>Now you can log in.</p>
          ) : (
            <p className={styles.gladtosee}>Try it again.</p>
          )}
        </div>
        {isRegistration ? (
          <Button
            className={styles.homeButton}
            onClick={() => {
              navigate('/sign-in');
            }}
          >
            Log in
          </Button>
        ) : (
          <Button
            className={styles.homeButton}
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Button>
        )}
      </div>
    </div>
  );
}

WellcomeRegisterWindow.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  isRegistration: PropTypes.bool.isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};

export default WellcomeRegisterWindow;
