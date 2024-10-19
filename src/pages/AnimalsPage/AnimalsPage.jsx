import { useSelector } from 'react-redux';
import CardList from '../../components/CardList/CardList';
import SideBar from '../../components/SideBar/SideBar';
import { selectAdvertisements } from '../../redux/advertisements/selectors';

function AnimalsPage() {
  const ads = useSelector(selectAdvertisements);
  return (
    <div>
      <SideBar />
      <CardList ads={ads} />
    </div>
  );
}

export default AnimalsPage;
