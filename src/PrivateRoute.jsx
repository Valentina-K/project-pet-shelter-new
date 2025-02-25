import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './redux/auth/selectors';

export const PrivateRoute = () => {
  const { token, user } = useSelector(selectAuth);
  console.log(user);
  return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
};
