import { useLocation, useNavigate } from 'react-router-dom';
import LoginWindow from '../../components/AuthModal/LoginWindow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserById, loginUser } from '../../redux/auth/operations';
import Container from '../../layout/Container/Container';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

function SignInPage() {
  const location = useLocation();
  const email = location.state?.value || '';
  const from = localStorage.getItem('from') || '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleLoginSuccess = (value) => {
    dispatch(loginUser({ email: email, password: value })).then((result) => {
      if (result.payload.id) {
        dispatch(getUserById(result.payload.id));
        navigate(from);
      } else {
        setError('Invalid password. Try again!');
      }
    });
  };

  return (
    <Container>
      <PageWrapper>
        <LoginWindow
          title={'Еnter password '}
          type={'password'}
          onLoginSuccess={handleLoginSuccess}
          error={error}
        />
      </PageWrapper>
    </Container>
  );
}

export default SignInPage;
