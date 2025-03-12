import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/slice';
import { Link } from 'react-router-dom';

function UserMenu() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <>
      {user && (
        <div className={styles.container}>
          <div className={styles.header}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
              width="60"
              height="60"
            />
            <span className={styles.name}>
              {user.firstName} {user.lastName}
            </span>
            <p>{user.email}</p>
            <div className={styles.closeIcon}>
              <IoMdClose className={styles.close} />
            </div>
          </div>
          <ul>
            <li>
              <Link to={'/dashboard'}>My account</Link>
            </li>
            <li>Favorite</li>
            <li>
              <button onClick={() => dispatch(logout())}>Log out</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default UserMenu;
