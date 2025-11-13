import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import LoginWindow from '../../components/AuthModal/LoginWindow';
import { isExistUser } from '../../redux/auth/operations';
import Container from '../../layout/Container/Container';
import AuthContainer from '../../layout/AuthContainer/AuthContainer';

function AuthPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.setItem('from', from);
  const notify = (message) => toast.error(message);

  const handleLoginSuccess = (value) => {
    dispatch(isExistUser(value)).then((result) => {
      if (result.error) notify(result.payload);
      else if (result.payload) {
        navigate('/sign-in', { state: { value } });
      } else {
        navigate('/register', { state: { value } });
      }
    });
  };

  return (
    <Container>
      <AuthContainer>
        <LoginWindow
          title={'Sing in or register '}
          type={'email'}
          onLoginSuccess={handleLoginSuccess}
        />
      </AuthContainer>
      <Toaster />
    </Container>
  );
}

export default AuthPage;
