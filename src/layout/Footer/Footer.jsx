import { NavLink } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import clsx from 'clsx';
import styles from './Footer.module.css';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <ul className={styles.infoList}>
          <NavLink to="/" className={styles.logo}>
            Logo
          </NavLink>
          <li className={styles.infoItem}>Kyiv, Ukraine, 01001, </li>
          <li className={styles.infoItem}>
            Velyka Vasylkivska street, office 56{' '}
          </li>
          <li className={styles.infoItem}>
            Have additional questions? Write to us at
          </li>
          <li className={styles.infoItem}>
            <a href="mailto:contact@animal_shelter.com">
              contact@animal_shelter.com
            </a>
          </li>
        </ul>
        <div className={styles.contactsContainer}>
          <a href="tel:+380446756528" className={styles.phone}>
            +380446756528
          </a>
          <div className={styles.socialLinks}>
            <SocialLinks />
          </div>
        </div>
        <div className={styles.navContainer}>
          <NavLink to="/" className={style}>
            Main page
          </NavLink>
          <NavLink to="/about-us" className={style}>
            About us
          </NavLink>
          <NavLink to="/animals" className={style}>
            Our animals
          </NavLink>
          <NavLink to="/volunteering" className={style}>
            Partners
          </NavLink>
          <NavLink to="/contacts" className={style}>
            Contact
          </NavLink>
        </div>
      </div>

      <button onClick={scrollToTop} className={styles.scrollToTopBtn}>
        Scroll to top
      </button>
      <div>
        <ul className={styles.policyContainer}>
          <li className={styles.policyItem}>
            © 2024 Animal Shelter. All rights reserved
          </li>
          <li className={styles.policyItem}>
            <a href="#">Privacy Policy</a>
          </li>
          <li className={styles.policyItem}>
            <a href="#">Terms of Service</a>
          </li>
          <li className={styles.policyItem}>Created with love by Team @233</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
