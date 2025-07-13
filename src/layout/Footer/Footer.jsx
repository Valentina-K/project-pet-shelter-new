import { NavLink } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { IoIosArrowUp } from 'react-icons/io';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/logo.png';
import styles from './Footer.module.css';

const style = ({ isActive }) =>
  clsx(styles.link, { [styles.active]: isActive });

function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <ul className={styles.infoList}>
          <NavLink to="/" className={styles.logo}>
            <img src={Logo} alt="logo" />
          </NavLink>
          <li className={styles.infoItem}>{t('footer.city')}</li>
          <li className={styles.infoItem}>{t('footer.address')} </li>
          <li className={styles.infoItem}>{t('footer.questions')}</li>
          <li className={styles.infoItem}>
            <a href="mailto:contact@animal_shelter.com">
              <strong>contact@animal_shelter.com</strong>
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
            {t('menu.main')}
          </NavLink>
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
      </div>

      <button
        onClick={scrollToTop}
        className={styles.scrollToTopBtn}
        aria-label="scroll to top"
      >
        <IoIosArrowUp className={styles.icon} />
      </button>
      <div className={styles.policyWrapper}>
        <ul className={styles.policyContainer}>
          <li className={styles.policyItem}>
            © 2024 Animal Shelter. {t('footer.all-rights')}
          </li>
          <li className={styles.policyItem}>
            <a href="#">{t('footer.privacy')}</a>
          </li>
          <li className={styles.policyItem}>
            <a href="#">{t('footer.terms')}</a>
          </li>
        </ul>
        <p className={styles.policyCreated}>{t('footer.created-by')}</p>
      </div>
    </div>
  );
}

export default Footer;
