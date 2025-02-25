import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import clsx from 'clsx';
import styles from './Header.module.css';
import LocaleDropDown from './LocaleDropDown/LocaleDropDown';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignInClick = () => {
    // Передаем текущий путь в состояние при перенаправлении на страницу авторизации
    navigate('/sign-in', { state: { from: location } });
  };
  console.log(location);
  const isAuth = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <NavLink to="/" className={styles.logoText}>
          Logo
        </NavLink>
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/about-us" className={style}>
          About us
        </NavLink>
        <NavLink to="/animals" className={style}>
          Our animals
        </NavLink>
        <NavLink to="/shelters" className={style}>
          Shelters
        </NavLink>
        <NavLink to="/contacts" className={style}>
          Volunteers
        </NavLink>
      </div>
      <div className={styles.authLinks}>
        <NavLink to="/forum" className={styles.forumLink}>
          <TiMessages className={styles.forumIcon} />
        </NavLink>
        <div className={styles.loginContainer}>
          <LocaleDropDown />
          {!isAuth ? (
            <button onClick={handleSignInClick} className={styles.loginBtn}>
              Log In
            </button>
          ) : (
            <div>BurgerMenu</div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

/* <NavLink to="/sign-in" className={styles.loginBtn}>
              Log In
            </NavLink> */
