import { useParams } from 'react-router';

function BlogPage() {
  const id = useParams().id;
  return <div>Blog {id}</div>;
}

export default BlogPage;
