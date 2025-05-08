import { useParams } from 'react-router';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Container from '../../layout/Container/Container';

function BlogPage() {
  const id = useParams().id;
  return (
    <Container>
      <PageWrapper>Blog {id}</PageWrapper>
    </Container>
  );
}

export default BlogPage;
