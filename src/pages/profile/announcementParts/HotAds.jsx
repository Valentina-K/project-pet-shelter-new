import { useOutletContext } from 'react-router';

function HotAds() {
  const { user } = useOutletContext();
  return (
    <div>
      HotAds {user.firstName} {user.lastName}
    </div>
  );
}

export default HotAds;
