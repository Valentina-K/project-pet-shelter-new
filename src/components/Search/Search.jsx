import { IoSearch } from 'react-icons/io5';
import styles from './Search.module.css';

function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <IoSearch className={styles.icon} />
      </div>
      <input type="text" className={styles.input} />
      <button type="button" className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}

export default Search;
