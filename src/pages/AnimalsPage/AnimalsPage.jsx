import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/CardList/CardList';
import SideBar from '../../components/SideBar/SideBar';
import {
  selectAdvertisements,
  selectIsLoading,
} from '../../redux/advertisements/selectors';
import Search from '../../components/Search/Search';
import { useEffect } from 'react';
import { fetchAdvertisements } from '../../redux/advertisements/operations';
import styles from './styles.module.css';
import { selectSelectedFilters } from '../../redux/categories/selectors';

function AnimalsPage() {
  const dispatch = useDispatch();
  const ads = useSelector(selectAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const selectedFilters = useSelector(selectSelectedFilters);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        await dispatch(fetchAdvertisements({ categories: selectedFilters }));
      } catch (err) {
        console.log('error fetching ads:', err);
      }
    };
    fetchAds();
  }, [dispatch, selectedFilters]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftBlock}>
        <SideBar />
      </div>
      <div className={styles.rightBlock}>
        <Search />
        {!isLoading && <CardList ads={ads} />}
      </div>
    </div>
  );
}

export default AnimalsPage;
