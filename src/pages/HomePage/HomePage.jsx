import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/HomeComponents/Hero/Hero';
import OurAnimals from '../../components/HomeComponents/OurAnimals/OurAnimals';
import {
  selectAdvertisements,
  selectPage,
  selectTotalPage,
  selectTotalElements,
} from '../../redux/advertisements/selectors';
import { selectIsLoading } from '../../redux/photos/selectors';
import { useEffect } from 'react';
import { fetchAdvertisements } from '../../redux/advertisements/operations';
import {
  setPage,
  setHasMore,
  resetData,
} from '../../redux/advertisements/slice';
import { clearFilters } from '../../redux/categories/slice';
import Shelters from '../../components/HomeComponents/Shelters/Shelters';
import JoinUsSection from '../../components/HomeComponents/JoinUsSection/JoinUsSection';
import OurBlog from '../../components/HomeComponents/OurBlog/OurBlog';
import Subscribe from '../../components/HomeComponents/Subscription/Subscription';
import Statistics from '../../components/HomeComponents/Statistics/Statistics';

function HomePage() {
  const dispatch = useDispatch();
  const ads = useSelector(selectAdvertisements);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const size = 8;
  const totalPage = useSelector(selectTotalPage);
  const totalElements = useSelector(selectTotalElements);
  useEffect(() => {
    dispatch(resetData());
    dispatch(clearFilters());
  }, [dispatch]);
  useEffect(() => {
    console.log('from home page', page, size);
    dispatch(fetchAdvertisements({ page, size }));
  }, [dispatch, page, size]);
  /* useEffect(() => {
    const fetchAds = async () => {
      try {
        await dispatch(fetchAdvertisements({ page, size }));
      } catch (err) {
        console.log('error fetching ads:', err);
      }
    };
    fetchAds();
  }, [dispatch, page]); */

  const handlePageChange = () => {
    if (page < totalPage) {
      dispatch(setPage(page + 1));
      dispatch(setHasMore(true));
    }
  };
  return (
    <>
      <Hero />
      {!isLoading && (
        <OurAnimals
          onViewMoreClick={handlePageChange}
          ads={ads}
          limit={totalElements}
        />
      )}
      <Shelters />
      <JoinUsSection />
      <OurBlog />
      <Subscribe />
      <Statistics />
      {/*<HotAds />*/}
    </>
  );
}

export default HomePage;
