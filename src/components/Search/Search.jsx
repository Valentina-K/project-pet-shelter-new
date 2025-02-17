import { IoSearch } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('');

  const handleChanged = (e) => setSearchValue(e.target.value);
  const handleClick = () => {
    setQuery(encodeURIComponent(searchValue));
    setSearchValue('');
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setQuery(encodeURIComponent(searchValue));
      setSearchValue('');
    }
  };

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <IoSearch className={styles.icon} />
      </div>
      <input
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={handleChanged}
        onFocus={() => setSearchValue('')}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className={styles.searchButton}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
