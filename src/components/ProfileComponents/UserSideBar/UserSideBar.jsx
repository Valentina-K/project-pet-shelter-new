import PropTypes from 'prop-types';
import styles from './UserSideBar.module.css';
import UserMenu from './UserMenu/UserMenu';

function UserSideBar({ user }) {
  const profileImage = user.profilePicture
    ? user.profilePicture
    : 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={profileImage} alt="user" className={styles.avatar} />
        <div>
          <p className={styles.name}>
            {user.firstName} {user.lastName}
          </p>
          <p className={styles.email}>{user.email}</p>
        </div>
      </div>
      <UserMenu />
    </div>
  );
}

UserSideBar.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
};

export default UserSideBar;
