import { useOutletContext } from 'react-router';

function EditAd() {
  const { user } = useOutletContext();
  return <div>EditAd {user.firstName}</div>;
}

export default EditAd;
