import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import {
  selectFilteredAdvertisements,
  selectIsLoading,
  selectTotalPage,
} from '../../redux/advertisements/selectors';
import {
  fetchAdvertisements,
  fetchSearchAdvertisements,
} from '../../redux/advertisements/operations';
import { selectSelectedFilters } from '../../redux/categories/selectors';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import SideBar from '../../components/SideBar/SideBar';
import SelectedAttribute from '../../components/AttributesFilter/SelectedAttribute/SelectedAttribute';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Container from '../../layout/Container/Container';
import styles from './styles.module.css';
import Loader from '../../components/Loader/Loader';

function AnimalsPage() {
  const dispatch = useDispatch();
  const ads = useSelector(selectFilteredAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectSelectedFilters);
  const [page, setPage] = useState(0);
  const size = 15;
  const totalPage = useSelector(selectTotalPage);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const search = { description: searchQuery };
      dispatch(fetchSearchAdvertisements({ page, size, query: search }));
    } else {
      dispatch(fetchAdvertisements({ page, size, filters }));
    }
  }, [page, searchQuery, filters, dispatch]);

  const handlePageChange = (current) => {
    setPage(current);
  };

  const handleSearchConfirm = useCallback((query) => {
    setPage(0);
    setSearchQuery(query);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <PageWrapper>
        <SelectedAttribute />
        <div className={styles.pageContainer}>
          <div className={styles.leftBlock}>
            <SideBar />
          </div>
          <div className={styles.rightBlock}>
            <Search onSearch={handleSearchConfirm} />
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
      </PageWrapper>
    </Container>
  );
}

export default AnimalsPage;
