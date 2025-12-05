import { IoSearch } from 'react-icons/io5';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './Search.module.css';
import { IoMdClose } from 'react-icons/io';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation();
  const [className, setClassName] = useState(`${styles.closeIconInit}`);

  const clearSearch = () => {
    setClassName(`${styles.closeIconInit}`);
    setSearchValue('');
    onSearch('');
  };

  const handleChanged = (e) => setSearchValue(e.target.value);
  const handleClick = () => {
    const value = searchValue.trim();
    onSearch(encodeURIComponent(value));
  };
  const handleKeyDown = (e) => {
    const value = searchValue.trim();
    if (e.keyCode === 13) {
      onSearch(encodeURIComponent(value));
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={className} onClick={clearSearch}>
        <IoMdClose className={styles.icon} />
      </div>
      <div className={styles.searchIcon}>
        <IoSearch className={styles.icon} />
      </div>
      <input
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={handleChanged}
        onKeyDown={handleKeyDown}
        onFocus={() => setClassName(`${styles.closeIcon}`)}
      />
      <button
        type="button"
        className={styles.searchButton}
        onClick={handleClick}
      >
        {t('search')}
      </button>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
