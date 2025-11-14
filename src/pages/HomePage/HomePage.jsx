import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/HomeComponents/Hero/Hero';
import OurAnimals from '../../components/HomeComponents/OurAnimals/OurAnimals';
import {
  selectAdvertisements,
  selectTotalPage,
  selectTotalElements,
  selectIsLoading,
  //selectHasMore,
  //selectError,
} from '../../redux/advertisements/selectors';
import { useEffect, useMemo, useState } from 'react';
import { getAllAds } from '../../redux/advertisements/operations';
import { setHasMore, resetData } from '../../redux/advertisements/slice';
import { useWindowWidth } from '../../hooks';
//import { clearFilters } from '../../redux/categories/slice';
import Shelters from '../../components/HomeComponents/Shelters/Shelters';
import JoinUsSection from '../../components/HomeComponents/JoinUsSection/JoinUsSection';
import OurBlog from '../../components/HomeComponents/OurBlog/OurBlog';
import Subscribe from '../../components/HomeComponents/Subscription/Subscription';
import Statistics from '../../components/HomeComponents/Statistics/Statistics';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Container from '../../layout/Container/Container';
import HotAds from '../../components/HomeComponents/HotAds/HotAds';
import Loader from '../../components/Loader/Loader';
import { getHotAds } from '../../redux/hotads/operations';

function HomePage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const widthScreen = useWindowWidth();
  const size = useMemo(
    () => (widthScreen < 768 ? 4 : widthScreen < 1920 ? 6 : 8),
    [widthScreen]
  );
  const ads = useSelector(selectAdvertisements);
  const totalPage = useSelector(selectTotalPage);
  const totalElements = useSelector(selectTotalElements);
  //const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);
  //const error = useSelector(selectError);
  useEffect(() => {
    dispatch(resetData());
  }, [dispatch]);

  useEffect(() => {
    //
    dispatch(getHotAds(true));
    dispatch(getAllAds({ size, page }));
  }, [dispatch, size, page]);

  const handlePageChange = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
      dispatch(setHasMore(true));
    }
  };

  if (isLoading) return <Loader />;

  return (
    <PageWrapper>
      <Hero />
      <Container>
        {!isLoading && (
          <OurAnimals
            onViewMoreClick={handlePageChange}
            ads={ads}
            limit={totalElements}
          />
        )}
        <HotAds />
        <Shelters />
        <JoinUsSection />
        <OurBlog />
        <Subscribe />
        <Statistics />
      </Container>
    </PageWrapper>
  );
}

export default HomePage;
