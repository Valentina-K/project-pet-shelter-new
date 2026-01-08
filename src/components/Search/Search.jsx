import { IoSearch } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './Search.module.css';
import { IoMdClose } from 'react-icons/io';

function Search({ value, onChange, onSearch, onClear }) {
  const { t } = useTranslation();

  const handleClick = () => {
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (value) {
        onSearch(value);
      }
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchIcon}>
          <IoSearch className={styles.icon} />
        </div>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IoMdClose
          className={`${styles.closeIcon} ${styles.icon} ${value ? styles.visible : ''}`}
          onClick={onClear}
        />
        <button
          type="button"
          className={styles.searchButton}
          onClick={handleClick}
        >
          {t('search')}
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
