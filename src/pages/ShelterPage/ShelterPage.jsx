import { useParams } from 'react-router';

function ShelterPage() {
  const { id } = useParams();
  //const shelter = getProductById(id);
  return <div>Shelter {id}</div>;
}

export default ShelterPage;
