import { useOutletContext } from 'react-router';

function ViewAds() {
  const { user } = useOutletContext();
  return <div>View ads {user.firstName}</div>;
}

export default ViewAds;
