import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import clsx from 'clsx';
import Logo from '../../assets/img/logo.png';
import LocaleDropDown from './LocaleDropDown/LocaleDropDown';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../../components/UserMenu/UserMenu';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false); // Состояние для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Если прокрутили, активируем состояние
      } else {
        setIsScrolled(false); // Если вернулись в начало, сбрасываем состояние
      }
    };

    window.addEventListener('scroll', handleScroll); // Добавляем обработчик события

    return () => {
      window.removeEventListener('scroll', handleScroll); // Очищаем обработчик при размонтировании
    };
  }, []);

  const handleSignInClick = () => {
    navigate('/auth', { state: { from: location } });
  };
  const isAuth = useSelector(selectIsLoggedIn);
  return (
    <nav
      className={clsx(styles.navContainer, { [styles.scrolled]: isScrolled })}
    >
      <div className={styles.logoContainer}>
        <NavLink to="/" className={styles.logoText}>
          <img src={Logo} alt="logo" />
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
            <UserMenu />
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
