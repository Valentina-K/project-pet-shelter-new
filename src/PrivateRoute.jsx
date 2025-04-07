import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './redux/auth/selectors';

export const PrivateRoute = () => {
  const { token } = useSelector(selectAuth);
  return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
};
