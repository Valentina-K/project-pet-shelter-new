import { NavLink } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import clsx from 'clsx';
import styles from './Header.module.css';
import LocaleDropDown from './LocaleDropDown/LocaleDropDown';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Navigation() {
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
          <NavLink to="/sign-in" className={styles.loginBtn}>
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
