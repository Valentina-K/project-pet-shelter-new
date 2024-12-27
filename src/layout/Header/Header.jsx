import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import clsx from 'clsx';
import styles from './Header.module.css';

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
          Contact
        </NavLink>
      </div>
      <div className={styles.loginContainer}>
        {/* тимчасово сердечко буде статичним, поки не визначиться його функуіонал для зареєстрованого і незареєстрованого користувача */}
        <div className={styles.iconContainer}>
          <FaRegHeart className={styles.icon} />
        </div>

        <NavLink to="/sign-in" className={styles.loginBtn}>
          Log In
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
