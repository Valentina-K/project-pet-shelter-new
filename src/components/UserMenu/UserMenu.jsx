import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserMenu() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

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
                  <Link to={'/dashboard'}>My account</Link>
                </li>
                <li className={styles.item}>Favorite</li>
                <li>
                  <button
                    onClick={() => dispatch(logout())}
                    className={styles.item}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
            <GiHamburgerMenu
              onClick={() => setIsOpen(true)}
              className={styles.burger}
            />
          </>
        ) : (
          <GiHamburgerMenu
            onClick={() => setIsOpen(true)}
            className={styles.burger}
          />
        ))}
    </>
  );
}

export default UserMenu;
