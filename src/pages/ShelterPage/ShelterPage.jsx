import { useParams } from 'react-router';
import Container from '../../layout/Container/Container';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

function ShelterPage() {
  const { id } = useParams();
  //const shelter = getProductById(id);
  return (
    <Container>
      <PageWrapper>Shelter {id}</PageWrapper>
    </Container>
  );
}

export default ShelterPage;
