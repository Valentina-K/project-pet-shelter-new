import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import LoginWindow from '../../components/AuthModal/LoginWindow';
import { isExistUser } from '../../redux/auth/operations';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Container from '../../layout/Container/Container';

function AuthPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.setItem('from', from);

  const handleLoginSuccess = (value) => {
    dispatch(isExistUser(value)).then((result) => {
      if (result.payload) {
        navigate('/sign-in', { state: { value } });
      } else {
        navigate('/register', { state: { value } });
      }
    });
  };

  return (
    <Container>
      <PageWrapper>
        <LoginWindow
          title={'Sing in or register '}
          type={'email'}
          onLoginSuccess={handleLoginSuccess}
        />
      </PageWrapper>
    </Container>
  );
}

export default AuthPage;
