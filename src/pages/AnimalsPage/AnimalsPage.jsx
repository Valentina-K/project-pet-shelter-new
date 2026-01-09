import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectFilteredAdvertisements,
  selectSearchString,
  selectTotalPage,
  selectIsLoading,
  selectError,
} from '../../redux/advertisements/selectors';
import { fetchAdvertisements } from '../../redux/advertisements/operations';
import {
  clearSearchString,
  setSearchString,
} from '../../redux/advertisements/slice';
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
import Error from '../../components/Error/Error';

function AnimalsPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const size = 15;
  const ads = useSelector(selectFilteredAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const totalPage = useSelector(selectTotalPage);
  const searchQuery = useSelector(selectSearchString);
  const error = useSelector(selectError);

  const filters = useSelector(selectSelectedFilters);
  //const isCategoryLoading = useSelector(selectCategoryIsLoading);
  //const categoryError = useSelector(selectCategoryError);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //const isLoading = isAdsLoading || isCategoryLoading;
  //const isError = adsError || categoryError;
  console.log('isLoading', isLoading);

  useEffect(() => {
    if (!isLoading && !error) {
      const filter = { ...filters, description: searchQuery };
      dispatch(fetchAdvertisements({ page, size, filters: filter }));
      setIsSidebarOpen(false);
    }
  }, [page, searchQuery, filters, dispatch, isLoading, error]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  const handlePageChange = (current) => {
    setPage(current);
  };

  const handleSearchConfirm = () => {
    const filter = { ...filters, description: searchQuery };
    dispatch(fetchAdvertisements({ page, size, filters: filter }));
  };

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <Container>
      <PageWrapper>
        <SelectedAttribute />
        <div className={styles.pageContainer}>
          <div
            className={`${styles.leftBlock} ${
              isSidebarOpen ? styles.open : styles.closed
            }`}
          >
            <button
              className={styles.toggleBtn}
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              aria-label="Toggle filters"
            >
              ☰
            </button>
            <SideBar />
          </div>
          {isSidebarOpen && (
            <div
              className={styles.overlay}
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <div className={styles.rightBlock}>
            <Search
              value={searchQuery}
              onSearch={handleSearchConfirm}
              onClear={() => dispatch(clearSearchString())}
              onChange={(value) => dispatch(setSearchString(value))}
            />
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
