import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAdvertisements,
  selectIsLoading,
  selectPage,
  selectTotalPage,
} from '../../redux/advertisements/selectors';
import { fetchAdvertisements } from '../../redux/advertisements/operations';
import { selectSelectedFilters } from '../../redux/categories/selectors';
import { resetData, setPage } from '../../redux/advertisements/slice';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import SideBar from '../../components/SideBar/SideBar';
import styles from './styles.module.css';
import { clearFilters } from '../../redux/categories/slice';

function AnimalsPage() {
  const dispatch = useDispatch();
  const ads = useSelector(selectAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectSelectedFilters);
  const page = useSelector(selectPage);
  const size = 15;
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(resetData());
    dispatch(clearFilters());
  }, [dispatch]);

  useEffect(() => {
    console.log('from useEffect', filters, page);
    dispatch(fetchAdvertisements({ page, size, filters }));
  }, [dispatch, filters, page, size]);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    dispatch(setPage(newPage - 1));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftBlock}>
        <SideBar />
      </div>
      <div className={styles.rightBlock}>
        <Search />
        {!isLoading && <CardList ads={ads} />}
        {!isLoading && (
          <Pagination
            current={page + 1}
            totalPage={totalPage}
            onPageClick={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default AnimalsPage;
