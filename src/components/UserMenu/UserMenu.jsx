import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
//import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { logout } from '../../redux/auth/slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { clearProcessedTokens } from '../../modules/tokenManager';
import styles from './UserMenu.module.css';

function UserMenu() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    clearProcessedTokens(); // сбрасываем токены
  };

  return (
    <>
      {user &&
        (isOpen ? (
          <>
            <div className={styles.container}>
              <div className={styles.header}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user"
                  width="60"
                  height="60"
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.name}>
                    {user.firstName} {user.lastName}
                  </p>
                  <p className={styles.email}>{user.email}</p>
                </div>
                <div
                  className={styles.closeIcon}
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose className={styles.close} />
                </div>
              </div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to={'/dashboard'} onClick={() => setIsOpen(!isOpen)}>
                    My account
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className={styles.item}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
            <FaUser onClick={() => setIsOpen(true)} className={styles.burger} />
          </>
        ) : (
          <FaUser onClick={() => setIsOpen(true)} className={styles.burger} />
        ))}
    </>
  );
}

export default UserMenu;
