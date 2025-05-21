import followMe from '../../assets/img/followMe.png';
import styles from './styles.module.css';

function FollowMeButton() {
  return (
    <button className={styles.followMe}>
      <img src={followMe} alt="follow me" />
    </button>
  );
}

export default FollowMeButton;
