import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import OurAnimals from '../../components/OurAnimals/OurAnimals';
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
import Shelters from '../../components/Shelters/Shelters';

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
      {/*<HotAds />
      
      <joinUs />
      <OurBlog />
      <Subscribe />
      <Metrics /> */}
    </>
  );
}

export default HomePage;
/* <GetAllAds />
      <Hero />
      <GetAllAds />
      <AboutUs />
      <OurTeam />
      <Metrics />
      <OurAnimals />
      <Partners />
      <Donations />
      <OurBlog /> */
