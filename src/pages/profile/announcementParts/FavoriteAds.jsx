import { useOutletContext } from 'react-router';

function FavoriteAds() {
  const { user } = useOutletContext();
  return (
    <div>
      Favorite {user.firstName} {user.lastName}
    </div>
  );
}

export default FavoriteAds;
