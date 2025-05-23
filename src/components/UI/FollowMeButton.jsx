import followMe from '../../assets/img/followMe.png';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function FollowMeButton({ className }) {
  return (
    <button className={clsx(styles.followMe, className)}>
      <img src={followMe} alt="follow me" />
    </button>
  );
}
FollowMeButton.propTypes = {
  className: PropTypes.string,
};

export default FollowMeButton;
