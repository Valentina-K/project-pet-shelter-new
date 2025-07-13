import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import { IoIosClose } from 'react-icons/io';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/logo.png';
import LocaleDropDown from './LocaleDropDown/LocaleDropDown';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../../components/UserMenu/UserMenu';
import burger from '../../assets/img/burger.svg';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания состояния меню
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
      <NavLink to="/" className={styles.logoLink}>
        <img src={Logo} alt="logo" />
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink to="/about-us" className={style}>
          {t('menu.about-us')}
        </NavLink>
        <NavLink to="/animals" className={style}>
          {t('menu.our-animals')}
        </NavLink>
        <NavLink to="/shelters" className={style}>
          {t('menu.shelters')}
        </NavLink>
        <NavLink to="/contacts" className={style}>
          {t('menu.volunteers')}
        </NavLink>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.authLinks}>
          <NavLink to="/" className={styles.forumLink}>
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
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={burger} alt="menu" className={styles.hamburgerIcon} />
        </button>
      </div>
      <div className={clsx(styles.mobileMenu, { [styles.opened]: isMenuOpen })}>
        <ul className={styles.mobileList}>
          <li className={styles.mobileLink}>
            <NavLink>Log in</NavLink>
          </li>
          <li className={styles.mobileLink}>
            <NavLink>ENG/UKR</NavLink>
          </li>
          <li className={styles.mobileLink}>
            <NavLink to="/about-us" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {t('menu.about-us')}
            </NavLink>
          </li>
          <li className={styles.mobileLink}>
            <NavLink to="/animals" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {t('menu.our-animals')}
            </NavLink>
          </li>
          <li className={styles.mobileLink}>
            <NavLink to="/shelters" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {t('menu.shelters')}
            </NavLink>
          </li>
          <li className={styles.mobileLink}>
            <NavLink to="/contacts" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {t('menu.volunteers')}
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoIosClose className={styles.closeButton} />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
